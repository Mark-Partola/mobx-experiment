import React from 'react';
import { useObserver } from 'mobx-react';
import styled from 'styled-components';
import { File } from './components/file';
import { useExplorerStore } from '../../store/use-explorer-store';

const Explorer = () => {
  const explorerStore = useExplorerStore();

  const handleRename = React.useCallback(
    (params) => {
      explorerStore.rename(params);
    },
    [explorerStore]
  );

  return useObserver(() => (
    <StyledFilesLayout>
      {explorerStore.files.map((item) => (
        <StyledFileItemLayout key={item.name}>
          <File meta={item} onRename={handleRename} />
        </StyledFileItemLayout>
      ))}
    </StyledFilesLayout>
  ));
};

const StyledFilesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFileItemLayout = styled.div`
  margin: 1vh 1vw;
`;

export { Explorer };
