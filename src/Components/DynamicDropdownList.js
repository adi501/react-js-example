import React from "react";
class DynamicDropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      technology: [
        { name: ".net", id: 1 },
        { name: "java", id: 2 },
        { name: "React", id: 3 },
        { name: "PHP", id: 4 }
      ],
      SelectedTechnologyName: "",
      SelectedTechnologyValue: ""
    };
  }
  handleChange = e => {
    this.setState({
      SelectedTechnologyValue: e.target.value
    });
  };
  render() {
    let optionTemplate = this.state.technology.map(v => (
      <option key={v.id} value={v.id}>
        {v.name}
      </option>
    ));

    return (
      <div>
        Dynamic Dropdown List EXP
        <br />
        <br />
        Select Technology:
        <select
          value={this.state.SelectedTechnologyValue}
          onChange={this.handleChange}
        >
          <option value="select">Select</option>
          {optionTemplate}
        </select>
        <br />
        Selected Technology Value:<p>{this.state.SelectedTechnologyValue}</p>
      </div>
    );
  }
}
export default DynamicDropdownList;
