import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
//TODO: Pass in campuses props.
const ComboBoxView = (props) => {
  return (
    <Autocomplete
      id="combobox"
      options={props.group}
      getOptionLabel={(option) => option.name}
      style={{ width: 200 }}
      size="small"
      onChange={props.handleChange}
      renderInput={(params) => (
        <TextField {...params} label="Select" variant="outlined" />
      )}
    />
  );
};
const allCampuses = [
  {
    id: "3434454",
    name: "Brooklyn College",
    address: "Brooklyn",
    imageUrl: "",
    description: "A college in Brooklyn",
  },
  {
    id: "3434455",
    name: "CSI",
    address: "Staten Island",
    imageUrl: "",
    description: "A college in Staten Island",
  },
  {
    id: "3434457",
    name: "John Jay",
    address: "New York",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434458",
    name: "College1",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434459",
    name: "College2",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434460",
    name: "College3",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434461",
    name: "College4",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3434462",
    name: "College5",
    address: "Lorensum",
    imageUrl: "",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
export default ComboBoxView;
