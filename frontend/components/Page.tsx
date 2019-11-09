// Local Props
interface Props {
  children: any;
}

// Component Definition
const Page: React.FC<Props> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Page;