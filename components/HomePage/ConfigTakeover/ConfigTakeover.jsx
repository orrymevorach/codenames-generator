import Input from '@/components/shared/Input/Input';
import Takeover from '@/components/shared/Takeover/Takeover';

export default function ConfigTakeover({
  handleClose,
  numberOfCards,
  setNumberOfCards,
}) {
  return (
    <Takeover handleClose={handleClose}>
      <div>
        Number of Cards:
        <Input
          type="number"
          value={numberOfCards}
          handleChange={e => setNumberOfCards(e.target.value)}
        />
      </div>
    </Takeover>
  );
}
