import React from 'react';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'Abdbajd',
    year: 1972
  },{
    name: 'Abdbajd',
    year: 1972
  },{
    name: 'Abdbajd',
    year: 1972
  },{
    name: 'Abdbajd',
    year: 1972
  },
  {
    name: 'csaasd',
    year: 2012
  },{
    name: 'sddsd',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },{
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, medicines) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : medicines.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <a
  onClick={(e) => {
    e.preventDefault()
    console.log(suggestion.name);
    suggestion.name = ''
  }} 
  className="bg-white text-sm z-50 float-left py-2 px-3 list-none text-left shadow-lg w-full cursor-pointer">
    {suggestion.name}
  </a>
);

export default class Example extends React.Component {
  constructor({medicines}) {
    super();
    this.state = {
      value: '',
      suggestions: [],
      medicines
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
        renderSuggestion={renderSuggestion}
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