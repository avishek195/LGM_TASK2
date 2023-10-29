import "./home.styles.css";

const Home = ({loaddata, carddata}) => {
    // console.log("hello");
    return (
        <>
        <div className="container">
        {!loaddata ? (
          <h1>Loading</h1>
        ) : (
          carddata.allData.map((ele) => {
            return (
              <div className="card-container" key={ele.id}>
                <img src={ele.avatar} alt="api pic" />
                <h2>{`${ele.first_name} ${ele.last_name}`}</h2>
                <h2>{ele.email}</h2>
              </div>
            );
          })
        )}
      </div>
        </>
    )
}

export default Home;