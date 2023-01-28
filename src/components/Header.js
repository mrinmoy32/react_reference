import React from 'react'; 

// function Header(){
//     const Header = () =>{

//     return <h1> We have created this fuctional componenet as Hearder</h1>
// }

// export default Header;

//direct export
  export  const Header = (props) =>{
    console.log(props);
    //return <h1> We have created this fuctional componenet as Hearder</h1>
    return (
       <> 
       <h1> Hello {props.name} {props.last}  -using props</h1>
    {props.children}
    </>
    )
}

//export default Header;
