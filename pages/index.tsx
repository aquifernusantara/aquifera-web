import Image from 'next/image';

import styled from 'styled-components';

const Styled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <Styled>
      <Image
        src="/svg/aquifera-logo.svg"
        alt="logo aquifera"
        width={190}
        height={160}
      />
      <h1>Welcome to Aquifera</h1>
    </Styled>
  );
}
