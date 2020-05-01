import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { IPoint } from '../../../../types/IPoint';

interface IPopOverProps {
  position: IPoint;
  onClose: () => void;
}

const $container = document.createElement('div');
document.body.appendChild($container);

const PopOver: React.FC<IPopOverProps> = React.memo(function PopOver(props) {
  const { onClose } = props;
  const overlayRef = React.useRef(null);
  const handleClose = React.useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose]
  );

  return ReactDOM.createPortal(
    <StyledOverlay onClick={handleClose} ref={overlayRef}>
      <StyledPopOver
        left={props.position.x}
        top={props.position.y}
      ></StyledPopOver>
    </StyledOverlay>,
    $container
  );
});

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledPopOver = styled.div<{ top: number; left: number }>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  width: 100px;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { PopOver };
