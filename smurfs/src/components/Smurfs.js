import React, { useEffect } from "react";
import { connect } from "react-redux";

import Smurf from "./Smurf"
import { fetchSmurfs } from "./../actions";

const Smurfs = (props) => {
  useEffect(() => {
    props.fetchSmurfs();
  }, []);

  return (
    <div className='smurfs-container'>
      {props.smurfs.map((smurf) => (
        <Smurf key={smurf.id} {...smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfsData,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
