import React from 'react';
import styled from 'styled-components';
import { PopOver, usePopOver } from '../../../pop-over';
import folderIcon from './assets/folder-icon.png';
import fileIcon from './assets/file-icon.png';

interface IFileProps {
  name: string;
  isDir: boolean;
}

export const File: React.FC<IFileProps> = (props) => {
  const popOver = usePopOver();

  return (
    <StyledFile onContextMenu={popOver.openByEvent}>
      <StyledIcon isDir={props.isDir} />
      <StyledName>{props.name}</StyledName>
      <PopOver
        visible={popOver.visible}
        position={popOver.position}
        items={[{ label: 'Move to Trash' }, { label: 'Rename' }]}
        onClose={popOver.close}
      />
    </StyledFile>
  );
};

const StyledFile = styled.div`
  width: 50px;
  text-align: center;
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

const StyledName = styled.div`
  font-size: 10px;
  line-height: 1.5;
  margin-top: 0.5em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
