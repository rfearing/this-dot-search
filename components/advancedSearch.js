import Accordion from './accordion';

const AdvancedSearch = () => (
	<Accordion id="user-advanced-search">
		<div label="Advanced Search">
			<div className="form-group row">
				<label
					htmlFor="fullname"
					className="col-md-4 col-form-label">
					With this full name
				</label>
				<div className="col-md-8">
					<input
						type="text"
						className="form-control"
						id="fullname"
						placeholder="Ricardo Fearing"
					/>
				</div>
			</div>

			<div className="form-group row">
				<label
					htmlFor="location"
					className="col-md-4 col-form-label">
					Location
				</label>
				<div className="col-md-8">
					<input
						type="text"
						className="form-control"
						id="location"
						placeholder="Harrisonburg, VA"
					/>
				</div>
			</div>

			<div className="form-group row">
				<label
					htmlFor="followers"
					className="col-md-4 col-form-label">
					With this many followers
				</label>
				<div className="col-md-8">
					<input
						type="text"
						className="form-control"
						id="followers"
						placeholder="20..50, >200, <2"
					/>
				</div>
			</div>

			<div className="form-group row">
				<label
					htmlFor="repos"
					className="col-md-4 col-form-label">
					With this many public repositories
				</label>
				<div className="col-md-8">
					<input
						type="text"
						className="form-control"
						id="repos"
						placeholder="0, <42, >5"
					/>
				</div>
			</div>

			<div className="form-group row">
				<label
					htmlFor="language"
					className="col-md-4 col-form-label">
					Working in this language
				</label>
				<div className="col-md-8">
					<input
						type="text"
						className="form-control"
						id="language"
						placeholder="This will be a select box"
					/>
				</div>
			</div>
		</div>
	</Accordion>
);

export default AdvancedSearch;
