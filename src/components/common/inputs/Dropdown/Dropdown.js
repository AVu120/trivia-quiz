import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const Dropdown = ({ options, label, variant, inputStyle, listboxStyle }) => {
  const useStyles = makeStyles((theme) => ({
    inputRoot: inputStyle,
    listbox: listboxStyle,
  }));

  const classes = useStyles();
  return (
    <div>
      <Autocomplete
        options={options}
        classes={classes}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} label={label} variant={variant} />
        )}
      />
    </div>
  );
};

export default Dropdown;
