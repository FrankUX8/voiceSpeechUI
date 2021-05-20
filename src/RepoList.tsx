import React from "react";

import { Repository } from "./data";

type Props = {
  repos: Repository[];
};

export const RepoList = ({ repos }: Props): JSX.Element => {
  return (
    <div className="block">
      <table style={{width: '100%'}}>
        <thead style={{textAlign: 'left', color: '#005A8c'}}>
          <tr>
            <th>First Name </th>
            <th>Last Name</th>
            <th>Status</th>
            <th>Card ID</th>
            <th>Zip</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <RepoRow  repo={repo} key={repo.name} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RepoRow = React.memo(
  ({ repo }: { repo: Repository }): JSX.Element => {
    return (
      <tr style={{border: '1px solid #f0f0f0', backgroundColor: '#fff'}}>
        <td>{repo.name}</td>
        <td>{repo.last}</td>
        <td>{repo.status}</td>
        <td>{repo.id}</td>
        <td>{repo.zip}</td>
        <td>{repo.state}</td>
      </tr>
    );
  }
);
