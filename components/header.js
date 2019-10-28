import { FaGithub, FaSearch } from 'react-icons/fa';
import css from '../base/scss/base.scss';

/**
 * The Header for the default Layout
 */
export default () => (
	<header className={`bg-light ${css.pageHeader}`}>
		<div className="container py-3">
			<h1 className={`m-0 text-dark ${css.headerTitle}`}>
				<FaGithub /> Ricardo's GitHub User Search
			</h1>
			<hr />
			<div className="d-flex justify-content-between flex-column flex-md-row">
				<p className="m-0 flex-grow-1">Browse users and their profiles via the GitHub API</p>
				<div className="form-group d-flex flex-grow-1">
					<label
						htmlFor="search"
						className="col-form-label mr-2"
					>
						Search:
					</label>
					<input
						type="text"
						className="form-control"
						id="search"
						placeholder="e.g. This Dot Labs"
					/>
				</div>
			</div>
		</div>
	</header>
);
