import React from 'react';

// const Filter = ({ type, filterList }) => {

//   if (type === 'Category') {

//   } else if (type === 'Cuisines') {

//   }
//            return (
//              <div>
//                <h1>
//                  Filter by
//                  {type}
//                </h1>
//                <div className="filter-list">
//                  <input type="checkbox" id="bar" name="bar" />
//                  <label htmlFor="bar">Bar</label>
//                </div>
//              </div>
//            );
// };

const Filter = ({ type, filterList }) => {
  console.log(filterList);
  let filters;
  if (type === 'category') {
    filters = filterList.map(filter => (
      <div>
        <input
          type="checkbox"
          id={filter.establishment.id}
          name={filter.establishment.id}
          value={filter.establishment.name}
        />
        <lable htmlFor={filter.establishment.id}>
          {filter.establishment.name}
        </lable>
      </div>
    ));
  } else if (type === 'cuisine') {
    filters = filterList.map(filter => (
      <div>
        <input
          type="checkbox"
          id={filter.cuisine.cuisine_id}
          name={filter.cuisine.cuisine_id}
          value={filter.cuisine.cuisine_name}
        />
        <lable htmlFor={filter.cuisine.cuisine_id}>
          {filter.cuisine.cuisine_name}
        </lable>
      </div>
    ));
  }
  return <div>{filters}</div>;
};

export default Filter;
