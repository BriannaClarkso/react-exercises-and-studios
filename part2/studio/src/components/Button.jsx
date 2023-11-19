import ClickedButton from "./ClickedButton";

function Button(props) {
   return props.saveButtom ? <SaveButton /> : <ClickedButton />;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 