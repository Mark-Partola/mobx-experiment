import React from 'react';
import { IPoint } from '../../../../../types/IPoint';

export function usePopOver() {
  const [container, setContainer] = React.useState<HTMLElement>();
  const [contextMenuOpened, setContextMenuOpened] = React.useState(false);
  const [contextMenuPosition, setContextMenuPosition] = React.useState<IPoint>({
    x: 0,
    y: 0,
  });

  const openByEvent = React.useCallback((e: React.MouseEvent) => {
    e.persist();
    e.preventDefault();
    e.stopPropagation();

    setContainer(e.currentTarget as HTMLElement);

    setContextMenuOpened(true);
    setContextMenuPosition({ x: e.pageX, y: e.pageY });
  }, []);

  const close = React.useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const positionUpdated = e.type === 'contextmenu';
      if (positionUpdated && container?.contains(target)) {
        return;
      }

      setContextMenuOpened(false);
    },
    [container]
  );

  return {
    openByEvent,
    close,
    position: contextMenuPosition,
    visible: contextMenuOpened,
  };
}
