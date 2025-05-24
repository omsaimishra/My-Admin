import "./widgetbig.css";

const Widgetbig = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetbig">
      <h3 className="widgetlgtitle">Latest Transactions</h3>
      <table className="widgettablelg">
        <thead>
          <tr className="widgetlgtr">
            <th className="widgetlgth">Customer</th>
            <th className="widgetlgth">Date</th>
            <th className="widgetlgth">Amount</th>
            <th className="widgetlgth">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="widgetlgtr">
            <td className="widgetlgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetlgimg"
              />
              <span className="widgetlgname">Susan Carol</span>
            </td>
            <td className="widgetlgdate">2 Jun 2024</td>
            <td className="wigetlgamount">$122.00</td>
            <td className="widgetlgstatus">
              <Button type="Aproved" />
            </td>
          </tr>
          <tr className="widgetlgtr">
            <td className="widgetlgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetlgimg"
              />
              <span className="widgetlgname">Susan Carol</span>
            </td>
            <td className="widgetlgdate">2 Jun 2024</td>
            <td className="wigetlgamount">$122.00</td>
            <td className="widgetlgstatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetlgtr">
            <td className="widgetlgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetlgimg"
              />
              <span className="widgetlgname">Susan Carol</span>
            </td>
            <td className="widgetlgdate">2 Jun 2024</td>
            <td className="wigetlgamount">$122.00</td>
            <td className="widgetlgstatus">
              <Button type="Aproved" />
            </td>
          </tr>
          <tr className="widgetlgtr">
            <td className="widgetlgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetlgimg"
              />
              <span className="widgetlgname">Susan Carol</span>
            </td>
            <td className="widgetlgdate">2 Jun 2024</td>
            <td className="wigetlgamount">$122.00</td>
            <td className="widgetlgstatus">
              <Button type="Pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Widgetbig;
