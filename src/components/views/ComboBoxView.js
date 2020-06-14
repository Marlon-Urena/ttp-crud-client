import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

export default ComboBoxView;
