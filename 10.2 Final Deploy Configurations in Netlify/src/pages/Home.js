import React from 'react';
import { Accent } from '../styled/Random';
import { CTA } from '../styled/CTA';
import { StyledTitle } from '../styled/Random';
export default function Home() {
  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler);
    return () => {
      document.removeEventListener('keyup', keyUpHandler);
    };
  }, [keyUpHandler]);

  const keyUpHandler = useCallback((e) => {
    if (e.key === 's') {
      history.push('/game');
    } else {
      return;
    }
  }, []);
  return (
    <div>
      <StyledTitle>Ready to type?</StyledTitle>
      <CTA to='/game'>
        Click or Type '<Accent>s</Accent>' to start playing
      </CTA>
    </div>
  );
}
