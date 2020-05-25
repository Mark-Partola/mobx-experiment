import React from 'react';
import { useObserver } from 'mobx-react';
import styled from 'styled-components';
import { File } from './components/file';
import { useExplorerStore } from '../../store/use-explorer-store';

interface IExplorerProps {
  path: string;
}

const useInit = (props: IExplorerProps) => {
  const [inited, setInited] = React.useState(false);
  const explorerStore = useExplorerStore();

  React.useEffect(() => {
    explorerStore.init(props.path);
    setInited(true);

    // TODO: destroy
  }, [explorerStore, props.path]);

  return inited;
};

const Explorer: React.FC<IExplorerProps> = (props) => {
  const inited = useInit(props);

  return useObserver(() => (inited ? <ExplorerController {...props} /> : null));
};

const ExplorerController: React.FC<IExplorerProps> = (props) => {
  const explorerStore = useExplorerStore();

  const handleRename = React.useCallback(
    (params) => {
      explorerStore.paths[props.path].rename(params);
    },
    [explorerStore, props.path]
  );

  return (
    <StyledFilesLayout>
      {explorerStore.paths[props.path].files.map((item) => (
        <StyledFileItemLayout key={item.name}>
          <File meta={item} onRename={handleRename} />
        </StyledFileItemLayout>
      ))}
    </StyledFilesLayout>
  );
};

const StyledFilesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFileItemLayout = styled.div`
  margin: 1vh 1vw;
`;

export { Explorer };
