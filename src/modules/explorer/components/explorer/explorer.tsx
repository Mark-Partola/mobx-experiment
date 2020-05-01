import React from 'react';
import styled from 'styled-components';
import { PopOver } from '../pop-over';
import folderIcon from './assets/folder-icon.png';
import fileIcon from './assets/file-icon.png';
import { IPoint } from '../../../../types/IPoint';

const Explorer = () => {
  const [
    contextMenuPosition,
    setContextMenuPosition,
  ] = React.useState<IPoint | null>(null);

  const handleContextMenuOpen = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenuPosition({ x: e.pageX, y: e.pageY });
  }, []);

  const handleContextMenuClose = React.useCallback(
    () => setContextMenuPosition(null),
    []
  );

  return (
    <>
      <StyledFilesLayout onContextMenu={handleContextMenuOpen}>
        <StyledFile isFolder={true} />
        <StyledFile isFolder={true} />
        <StyledFile />
        <StyledFile />
      </StyledFilesLayout>
      {contextMenuPosition && (
        <PopOver
          position={contextMenuPosition}
          onClose={handleContextMenuClose}
        />
      )}
    </>
  );
};

const StyledFilesLayout = styled.div`
  display: flex;
`;

const StyledFile = styled.div<{ isFolder?: boolean }>`
  width: 32px;
  height: 32px;
  background-image: url(${(props) => (props.isFolder ? folderIcon : fileIcon)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1vh 1vw;
  cursor: pointer;
  position: relative;
`;

export { Explorer };
