import React from 'react';
import styled, { css } from 'styled-components';
import { IFileMeta } from '../../../../../../types/IFileMeta';
import { PopOver, usePopOver } from '../../../pop-over';
import folderIcon from './assets/folder-icon.png';
import fileIcon from './assets/file-icon.png';

interface IFileProps {
  meta: IFileMeta;
  onRename: (params: { meta: IFileMeta; name: string }) => void;
}

export const File: React.FC<IFileProps> = React.memo(function File(props) {
  const { onRename } = props;
  const popOver = usePopOver();
  const inputNameRef = React.useRef<HTMLInputElement>(null);
  const [isEditName, setIsEditName] = React.useState(false);

  const handleRename = React.useCallback(() => {
    setIsEditName(true);
  }, []);

  const handleStopEdit = React.useCallback(() => {
    if (!inputNameRef.current) {
      return;
    }

    setIsEditName(false);

    onRename({
      meta: props.meta,
      name: inputNameRef.current.value,
    });
  }, [inputNameRef, props.meta, onRename]);

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
    if (isEditName && inputNameRef.current) {
      inputNameRef.current.focus();
    }
  }, [isEditName]);

  return (
    <StyledFile onContextMenu={popOver.openByEvent}>
      <StyledIcon isDir={props.meta.isDir} />
      {isEditName ? (
        <StyledNameInput
          defaultValue={props.meta.name}
          ref={inputNameRef}
          onBlur={handleStopEdit}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <StyledName>{props.meta.name}</StyledName>
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

const styledNameMixin = css`
  font-size: 10px;
  line-height: 1.5;
  margin-top: 0.5em;
`;

const StyledName = styled.div`
  ${styledNameMixin}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledNameInput = styled.input`
  ${styledNameMixin}
  width: 100%;
`;
