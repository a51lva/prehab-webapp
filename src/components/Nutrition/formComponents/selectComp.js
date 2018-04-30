import React from "react";
import Select from 'react-select';


class SpecialSelect extends React.Component {
	handleChange = value => {
		// this is going to call setFieldValue and manually update values.topcis
		this.props.onChange('topics', value);
	};

	handleBlur = () => {
		// this is going to call setFieldTouched and manually update touched.topcis
		this.props.onBlur('topics', true);
	};

	render() {
		return (
			<div style={{ margin: '1rem 0' }}>
				<label htmlFor="color">
					Restrições
				</label>
				<Select
					id="color"
					options={this.props.options}
					multi={true}
					onChange={this.handleChange}
					onBlur={this.handleBlur}
					value={this.props.value}
				/>
				{!!this.props.error &&
				this.props.touched && (
					<div style={{ color: 'red', marginTop: '.5rem' }}>
						{this.props.error}
					</div>
				)}
			</div>
		);
	}
}

export default SpecialSelect;