export const customRenderComponents = () => ({
  components: {
    h2: (props) => {
      console.log(props);
      return (
        <h2 id={`header-version`} {...props}>
          {' '}
        </h2>
      );
    },
  },
});
