import { Button } from "../../atoms/Button"
import { TextInput } from "../../atoms/TextInput"

type Props = {

}

export function Form() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
        margin: '0 auto',
      }}
    >
      <TextInput />
      <Button>
        submit
      </Button>
    </div>
  )
}