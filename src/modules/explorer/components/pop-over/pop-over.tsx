import React from 'react';
import ReactDOM from 'react-dom';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { IPoint } from '../../../../types/IPoint';

interface IPopOverProps {
  visible: boolean;
  position: IPoint;
  items: { label: string; onSelect: () => void }[];
  onClose: (event: MouseEvent) => void;
}

const $container = document.createElement('div');
document.body.appendChild($container);

const PopOver: React.FC<IPopOverProps> = React.memo(function PopOver(props) {
  const { onClose } = props;

  React.useEffect(() => {
    if (props.visible) {
      document.addEventListener('contextmenu', onClose);
      document.addEventListener('click', onClose);
    }

    return () => {
      document.removeEventListener('contextmenu', onClose);
      document.removeEventListener('click', onClose);
    };
  }, [props.visible, onClose]);

  const handleContextMenu = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const animation = useTransition(props.visible, null, {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100,
    },
  });

  return ReactDOM.createPortal(
    animation.map(
      ({ props: style, key, item }) =>
        item && (
          <StyledPopOver
            left={props.position.x}
            top={props.position.y}
            onContextMenu={handleContextMenu}
            key={key}
            style={style}
          >
            {props.items.map((item) => (
              <StyledPopOverItem key={item.label} onClick={item.onSelect}>
                {item.label}
              </StyledPopOverItem>
            ))}
          </StyledPopOver>
        )
    ),
    $container
  );
});

const StyledPopOver = styled(animated.div)<{ top: number; left: number }>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background-color: #ebebeb;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 0.3em 0;
  border-radius: 5px;
  font-weight: var(--boldFont);
`;

const StyledPopOverItem = styled.div`
  color: #444;
  padding: 0.3em 1em;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #035dc5;
    color: #fff;
  }
`;

export { PopOver };
