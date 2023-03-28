const outsideProps = "outsideProps";
const first3 = (props) => {
  const firstProps = "firstProps";
  return (second = () =>
    (third = () => {
      console.log(props);
      console.log(firstProps);
      console.log(outsideProps);
    }));
};

// const outsideProps = "outsideProps";
const first = (props) => {
  const firstProps = "firstProps";
  return function second() {
    console.log(props,"@1");
    console.log(firstProps,"@2");
    console.log(outsideProps,"@3");
  };
};

const fn = first3("abc");
fn()();