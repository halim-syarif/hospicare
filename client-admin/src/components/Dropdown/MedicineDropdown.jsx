import React from 'react';
import Autosuggest from 'react-autosuggest';


const getSuggestions = (value, medicines) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : medicines.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

// const renderSuggestion = suggestion => (
//   <a
//   onClick={(e) => {
//     e.preventDefault()
//     console.log(suggestion.name);
//     suggestion.name = ''
//   }} 
//   className="bg-white text-sm z-50 float-left py-2 px-3 list-none text-left shadow-lg w-full cursor-pointer">
//     {suggestion.name}
//   </a>
// );

export default class MedicineDropdown extends React.Component {
  constructor({medicines, selectHandle}) {
    super();
    this.state = {
      value: '',
      suggestions: [],
      medicines,
      selectHandle
    };
  }
  

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value, this.state.medicines)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };


  renderSuggestion = suggestion => (
    <a
    onClick={(e) => {
      e.preventDefault()
      this.state.selectHandle(suggestion.id)
      suggestion.name = ''
    }} 
    className="bg-white text-sm z-50 float-left py-2 px-3 list-none text-left shadow-lg w-full cursor-pointer">
      {suggestion.name}
    </a>
  );

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Type a medicine name',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        theme={{
          input: {
            width: "100%",
            borderRadius: 5,
            fontSize: 15,
          }
        }}
      />
    );
  }
}