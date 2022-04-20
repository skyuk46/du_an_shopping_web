import "../../containers/admin/index.scss"
import Table from './Table';

function Feature(props) {
  const { featureName, tableList } = props;
  return (
    <div class="feature-container">
      <div class="admin-feature">{featureName}</div>
      {
        tableList.map(i => {
          return <Table name={i} {...props} />
        })
      }
    </div>
  );
}

export default Feature;