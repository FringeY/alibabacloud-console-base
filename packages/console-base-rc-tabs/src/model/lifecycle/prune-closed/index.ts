import {
  useEffect
} from 'react';

import {
  useHandlePrune
} from '../../hook';

/**
 * props.tabs 变化时对 closedTabs 进行清理（dispatchPruneClosedTabs 会根据 tabs 变化）
 * 这里其实是一个很好的例子，用于证明通过 reducer 可以绕过 useEffect 循环，因为
 * 如果用 useEffect 的话，这里将依赖 state.closedTabs
 */
export default function PruneClosed(): null {
  const handlePrune = useHandlePrune();
  
  useEffect(handlePrune, [handlePrune]);
  
  return null;
}
