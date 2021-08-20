import React, { useState, useEffect } from "react";
import '../styles.css'

import Dropzone from "react-dropzone";

export default function MyDropzone() {

 
  const [fileItems, setFileItems] = useState([]);
  const [fileNames, setselectedFiles] = useState([]);
  const [index1, setIndex] = useState();
  const [name1, setName] = useState();

  // const [jfileItems, setJfilesItems] = useState([])


  // const [selectedFile, setSelectedFile1] = useState();
  // const [isSelected, setIsSelected] = useState(false);
  // const [previewData, setPreview] = useState();


  const [state, setState] = useState({

});


//handle submit button starts ------------------------------------------------/
const handleSubmission = async (index1, preview1) => {

  
// console.log(preview1);

// console.log(fileItems[index1])

// // let fileItemsTemp = fileItems;
// const newImg = preview1;
// const newTitle = fileItems[index1].name

// // fileItemsTemp[index1].preview=newImg;
// await setFileItems((oldItems)=>{
//   return oldItems.map((arrElem, index) => {
//       return arrElem
//   })
// })

};
//handle submit button Ends ------------------------------------------------/





// Handle Accepted Files from Dropzone -------------------------------------/
  const handleAcceptedFiles =  (files) => {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),

      })
    );


    setselectedFiles(files)

 
  }

// 
useEffect(()=>{
  fileNames.map((item) => {
    setFileItems((prev) => {
      return [...prev, item]
    })
  })
},[fileNames])
// Handle Accepted Files from Dropzone -------------------------------------/






//---- Edit Section Edit button start --------------------------------------/
const editFunc1 = (index, name) => {
    console.log(name)
    console.log(index)
    console.log(index1)
    setIndex(index)
    setName(name)
  }
//---- Edit Section Edit button start --------------------------------------/




//Getting Preview Of image from dropzone -----------------------------------/
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
   //Getting Preview Of image from dropzone -----------------------------------/





  // useEffect(() => {
  //   if (!selectedFile) {
  //     setPreview(undefined)
  //     return
  //   }

  //   const objectUrl = URL.createObjectURL(selectedFile)
  //   setPreview(objectUrl)

  //   // free memory when ever this component is unmounted
  //   return () => URL.revokeObjectURL(objectUrl)
  // }, [selectedFile])



  // const [selectedFile, setSelectedFile1] = useState();
  // const [isSelected, setIsSelected] = useState(false);
  // const [preview1, setPreview] = useState();


  
  // Choose Handeler Image Starts -------------------------------------------------/
  const [isSet, setIsSet] = useState(false);
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);


  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
        setIsSet(true)
      });
      reader.readAsDataURL(e.target.files[0]);
     
    }
    

    
  
  };
  const cutModel = () => {
    const closeModel= document.getElementById('closeModel');
    setIsSet(false)
  
  }

// Choose Handeler Image Ends -------------------------------------------------Ends
//Actual Edit data Starts ---------------------------------------------------------/

const uploadEdit = () =>{

  console.log("clkicked")
  const tempJdata = fileItems;

  console.log(fileItems)

  // console.log(tempJdata[index])
  console.log(name1)
  console.log(tempJdata[index1].name)
  console.log(index1)
  console.log(imgData)



  // tempJdata[index1].name =name1;
  // tempJdata[index1].path =name1;

  tempJdata[index1].preview = imgData
  // tempJdata[index1].name = name1 


//   // setJdata(tempJdata)

  setFileItems((oldItems)=>{
      return oldItems.map((arrElem, index) => {
        console.log(arrElem)
          return arrElem

      })
 })

 
  const closeModel= document.getElementById('closeModel');
  closeModel.click();



}

//Actual Edit Data Ends -----------------------------------------------------------Ends/

// console.log(imgData)



  //Delete Section Starts
  const deleteFunc = (index) =>{
  const id = index;

  setFileItems((oldItems)=>{
       return oldItems.filter((arrElem, index) => {
           return index !==id;
       })
  })
}
  //Delete Section Ends




// console.log(fileItems)

  return (
    <>
      <div className="App">
        <Dropzone
          onDrop={handleAcceptedFiles}
          accept="image/*"
          minSize={1024}
          maxSize={3072000}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag'n'drop images, or click to select files</p>
            </div>
          )}
        </Dropzone>
        <div>
          <strong>Images :</strong>
          {/* <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul> */}
        </div>
      </div>






      <div className="container">
        <table class="table">
          <thead>
            <tr>

              <th scope="col">id</th>
              {/* <th scope="col">title</th> */}
              <th scope="col" scope="col">Image</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>

            </tr>
          </thead>
          <tbody>

            {
              fileItems.map((value1, index) => {
                // {console.log(index + 1)}
                // {console.log(value1.title)}
                console.log(value1)
                console.log("jhsdhjdshjfdhsjdfhjfh")

                return <>
                  <tr>

                    {/* onClick={() => { editFunc1(index) }} */}
                    {/* onClick={() => { deleteFunc(index) }} */}



                    <td>{index + 1}</td>
                    {/* <td>{value1.name}</td> */}

                    <td>

                      <img class="card-img-top ml-5" id="imgdisp" src={value1.preview} alt="Card image cap"></img>

                    </td>
                    <td><button className="btn btn-info btn-sm" data-target="#modalEditForm" data-toggle="modal" onClick={() => { editFunc1(index,value1.name) }}>Edit</button></td>
                    <td><button className="btn btn-danger btn-sm"onClick={() => { deleteFunc(index) }} >Delete</button></td>
                  </tr>
                </>
              })

            }

          </tbody>
        </table>

        {/* Model Edit */}
        <div className="modal" id="modalEditForm">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Add</h3>
                <button type="button" id="closeModel" onClick={cutModel} class="close" data-dismiss="modal">&times;</button>
              </div>

              <div className="modal-body">


                {/* {console.log("------------",fileItems[index1].preview)} */

                }

{console.log(fileItems[index1]?.preview)}




        
      {(isSet)? (<img className="card-img-top" id="modelImage" src={imgData}  alt="img model"></img> )
          :(<img className="card-img-top" id="modelImage" src={fileItems[index1]?.preview} alt="img model"></img>)
 
      }         
          
          <br></br>
                {/* <button type="submit" class="btn btn-primary form-control" onClick={() => {editFunction(index1)}}>Edit </button> */}
              
                {console.log(fileItems[index1]?.preview)}

                <div className="register_profile_image">
                 <input id="profilePic" type="file" onChange={onChangePicture} />
                 <br/><br/>
                 <button onClick={uploadEdit}>Upload</button>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Model Edit */}

      </div>
    </>
  );
}
