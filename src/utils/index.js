// group items array based on the
// value returned by calling fn with the current iterated item

export const groupBy = (items, fn) =>
  Object.entries(
    items.reduce(
      (result, item) => ({
        ...result,
        [fn(item)]: [...(result[fn(item)] || []), item],
      }),
      {}
    )
  ).reduce((acc, curr) => {
    return [...acc, { year: curr[0], posts: curr[1] }]
  }, [])

// get the Year of a specified date

export const getDateYear = ({ node }) =>
  new Date(node.frontmatter.date).getFullYear()
