import { useContext } from 'react';
import { viewportContext } from '../contexts/viewportContext';

interface IContext {
  width: number;
}

export const useViewport = () => {
  const context: IContext = useContext(viewportContext);
  if (!context) {
    throw new Error('UseViewport should be used in ViewportProvider');
  }
  const { width } = context;
  return { width };
};
