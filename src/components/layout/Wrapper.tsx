import React, {FC} from 'react';
import {CssBaseline, Paper} from "@material-ui/core";

const Wrapper:FC = ({children}) => {
    return (
        <>
          <CssBaseline/>
            <div>
                <Paper>
                    {children}
                </Paper>
            </div>
        </>
    );
};

export default Wrapper;
