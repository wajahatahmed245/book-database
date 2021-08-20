import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { PageHeader, Button } from 'antd';

export const Heading = ({title, link, linkText}) => {

  const history = useHistory();

  const extra = (link && linkText) ? [
    <Button type="primary">
      <Link to={link}>{linkText}</Link>
    </Button>
  ] : null

  return (
    <PageHeader
      title={title}
      onBack={() => history.goBack()}
      extra={extra}
    />
  )
}