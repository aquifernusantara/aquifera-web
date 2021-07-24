import Button from '@components/common/Button';

import { StyledBottomCardContent } from './bottom-card-content.styled';

const BottomCardContent = () => {
  return (
    <StyledBottomCardContent>
      <h3>Tertarik dengan perubahan yang diberikan?</h3>
      <div className="button-container">
        <Button>Yuk, ikut bergabung</Button>
        <Button>Unduh Lembar Pertanggungjawaban</Button>
      </div>
    </StyledBottomCardContent>
  );
};

export default BottomCardContent;
