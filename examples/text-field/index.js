import React, { Component } from 'react';
import { render } from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from '../../src/text-field/TextField';

import TextFieldTemp from '../../src/text-field/TextFieldTemp';
//import { getMuiTheme as getMuiThemeNew } from 'material-ui-next/styles/getMuiTheme';
import { MuiThemeProvider as MuiThemeNew } from 'material-ui-next/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui-next/styles/createMuiTheme';


injectTapEventPlugin();

const style = {
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const theme = createMuiTheme({

});

class TextFields extends Component {
    state = {
        multiHintText: '',
        singleHintText: '',
        valueField1: '',
        valueField2: '',
        valueField3: '',
        valueField4: '',
        
        newMultiHintText: '',
        newSingleHintText: '',
        newValueField5: '',
        newValueField6: '',
        newValueField7: '',
        newValueField8: '',
    };

    onChangeValue = (field, value) => {
        this.setState({ [field]: value });
    };

    onChangeMultiHintText = (multiHintText) => {
        this.setState({ multiHintText });
    };

    onChangeSingleHintText = (singleHintText) => {
        this.setState({ singleHintText });
    };

    render() {
        return (
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div style={style}>
                    <h3> Material-ui v.0 </h3>
                    <TextField
                        label="Text"
                        value={this.state.valueField1}
                        onChange={(value) => this.onChangeValue("valueField1", value)}
                    />
                    <TextField
                        label="Number"
                        type="number"
                        value={this.state.valueField2}
                        onChange={(value) => this.onChangeValue("valueField2", value)}
                    />
                    <TextField
                        label="Default value"
                        type="number"
                        value={this.state.valueField3 || 100}
                        onChange={(value) => this.onChangeValue("valueField3", value)}
                    />
                    <TextField
                        placeholder="Hint text"
                        type="text"
                        value={this.state.singleHintText}
                        onChange={this.onChangeSingleHintText}
                    />
                    <TextField
                        placeholder="Multiline field showing 2 rows and up to 4 rows"
                        type="text"
                        multiline
                        rows={2}
                        rowsMax={4}
                        value={this.state.multiHintText}
                        onChange={this.onChangeMultiHintText}
                    />
                    <TextField
                        placeholder="Full width"
                        type="text"
                        fullWidth
                        value={this.state.valueField4}
                        onChange={(value) => this.onChangeValue("valueField4", value)}
                    />
                </div>
            </MuiThemeProvider>
            {/*
                Material-ui-next components
                Rendered /src/TextFieldTemp.js
            */}
            {/*<MuiThemeNew theme={theme}>*/}
            <div style={style}>
                <h3> Material-ui v.1 </h3>
                <TextFieldTemp
                    label='Text'
                    value={this.state.newValueField5}
                    onChange={(value) => this.onChangeValue("newValueField5", value)}
                />
                <TextFieldTemp
                    label='Number'
                    type='number'
                    value={this.state.newValueField6}
                    onChange={(value) => this.onChangeValue("newValueField6", value)}
                />
                <TextFieldTemp
                    label='Default value'
                    type='number'
                    value={this.state.newValueField7 || 100}
                    onChange={(value) => this.onChangeValue("newValueField7", value)}
                />
                <TextFieldTemp
                    placeholder='Short hint text'
                    type='text'
                    value={this.state.newSingleHintText}
                    onChange={(value) => this.onChangeValue("newSingleHintText", value)}
                />
                <TextFieldTemp
                    placeholder='Multiline field, showing 2 rows and up to 4 rows'
                    type='text'
                    multiline
                    rows={2}
                    rowsMax={4}
                    value={this.state.newMultiHintText}
                    onChange={(value) => this.onChangeValue("newMultiHintText", value)}
                />
                <TextFieldTemp
                    placeholder='Full Width'
                    fullWidth
                    type='text'
                    value={this.state.newValueField8}
                    onChange={(value) => this.onChangeValue("newValueField8", value)}
                />
            </div>
            {/*</MuiThemeNew>*/}
        </div>
        );
    }
}

render(<TextFields />, document.getElementById('text-fields'));
