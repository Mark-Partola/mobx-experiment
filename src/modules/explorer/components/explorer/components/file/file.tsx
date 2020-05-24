import React from 'react';
import styled, { css } from 'styled-components';
import { PopOver, usePopOver } from '../../../pop-over';
import folderIcon from './assets/folder-icon.png';
import fileIcon from './assets/file-icon.png';

interface IFileProps {
  name: string;
  isDir: boolean;
}

export const File: React.FC<IFileProps> = React.memo(function File(props) {
  const popOver = usePopOver();
  const inputLabelRef = React.useRef<HTMLInputElement>(null);
  const [isEditLabel, setIsEditLabel] = React.useState(false);

  const handleRename = React.useCallback(() => {
    setIsEditLabel(true);
  }, []);

  const handleStopEdit = React.useCallback(() => {
    if (!inputLabelRef.current) {
      return;
    }

    setIsEditLabel(false);

    console.log(inputLabelRef.current.value);
  }, [inputLabelRef]);

  const handleKeyPress = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key !== 'Enter') {
        return;
      }

      handleStopEdit();
    },
    [handleStopEdit]
  );

  React.useEffect(() => {
    if (isEditLabel && inputLabelRef.current) {
      inputLabelRef.current.focus();
    }
  }, [isEditLabel]);

  return (
    <StyledFile onContextMenu={popOver.openByEvent}>
      <StyledIcon isDir={props.isDir} />
      {isEditLabel ? (
        <StyledNameInput
          defaultValue={props.name}
          ref={inputLabelRef}
          onBlur={handleStopEdit}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <StyledName>{props.name}</StyledName>
      )}
      <PopOver
        visible={popOver.visible}
        position={popOver.position}
        items={[
          { label: 'Move to Trash', onSelect: () => {} },
          {
            label: 'Rename',
            onSelect: handleRename,
          },
        ]}
        onClose={popOver.close}
      />
    </StyledFile>
  );
});

const StyledFile = styled.div`
  width: 50px;
  text-align: center;
  font-weight: var(--regularFont);
`;

const StyledIcon = styled.div<{ isDir?: boolean }>`
  height: 32px;
  width: 32px;
  margin: 0 auto;
  background-image: url(${(props) => (props.isDir ? folderIcon : fileIcon)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const styledLabelMixin = css`
  font-size: 10px;
  line-height: 1.5;
  margin-top: 0.5em;
`;

const StyledName = styled.div`
  ${styledLabelMixin}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledNameInput = styled.input`
  ${styledLabelMixin}
  width: 100%;
`;
