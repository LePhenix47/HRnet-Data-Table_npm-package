//React
import React, { useEffect, useState, useRef } from "react";

//Utils
import {
  getArrayObjectValues,
  getObjectProperties,
  sortArrayOfObjects,
  splitArrayStringOnUpperCase,
  setTitlecaseToCamelCase,
  log,
  deepCopy,
  splitString,
  formatText,
  filterArrayByString,
} from "../../utils/functions/helper-functions";

//Components
import EntriesIndex from "../EntriesIndex/EntriesIndex";
import QuerySearch from "../QuerySearch/QuerySearch";
import ShowEntries from "../ShowEntries/ShowEntries";
import PaginationIndex from "../PaginationIndex/PaginationIndex";

//Proptypes
import * as PropTypes from "prop-types";

export default function DataTable({
  title = "",
  data = null,
  sort = false,
  filter = false,
  scroll = false,
  height = 500,
  info = false,
  lengthMenu = [10, 25, 50, 100],
  paging = false,
}) {
  //We get the amount of total entries

  /**
   * Pagination Index set by the user, default by one, mathematical interval: [1, totalPagination]
   */
  const [paginationIndex, setPaginationIndex] = useState(1);

  /**
   * Entries shown = Number(select.value)
   */
  const [entriesShown, setEntriesShown] = useState(lengthMenu[0]);

  /**
   * Tuple to save the activation state of the button to sort
   */
  const [buttonActive, setButtonActive] = useState({
    top: false,
    bottom: false,
  });

  /**
   * Object containing the starting index and the ending index
   */
  let [usefulIndexes, setUsefulIndexes] = useState({});

  /**
   * Values inside the HTML table
   */
  let [values, setValues] = useState([]);

  /**
   * Tuple containing: [oldTPI, newTPI]
   */
  let [historyTotalPaginationsArray, setHistoryTotalPaginationsArray] =
    useState([]);

  /**
   * Tuple containing: [oldPI, newPI]
   */
  let [historyPaginationsArray, setHistoryPaginationsArray] = useState([]);

  /**
   * Boolean state to know if the array needs sorting
   */
  let [needsSorting, setNeedsSorting] = useState(false);

  /**
   * Boolean state to know if the array needs filtering
   */
  let [needsFiltering, setNeedsFiltering] = useState(false);

  /**
   * Query inputted by the user
   */
  let [queryInputted, setQueryInputted] = useState("");
  // log({ queryInputted, needsFiltering });

  /**
   * Data filtered by the query inputted
   */
  let [filteredData, setFilteredData] = useState([]);

  /**
   * Property value to to which it needs to sort the array by
   */
  let [sortingValue, setSortingValue] = useState("");

  /**
   * Boolean to know if the sorted array needs to be reversed
   */
  let [isReverse, setReverse] = useState(false);

  /**
   * Array that deep copies the value inputted by the user
   */
  let [copiedData, setCopiedData] = useState([]);

  /**
   * Data that has been sorted
   */
  let [sortedData, setSortedData] = useState([]);

  let [scrollStyleHeight, setScrollStyleHeight] = useState({});

  const developerWantsScrolling = !!scroll && !!height;

  //We get the properties of the object inside the data
  let properties = getObjectProperties(data[0]);
  //We create the properties for the head
  properties = splitArrayStringOnUpperCase(properties, "titlecase", " ");

  //We populate the body of the table
  /**
   * Amount of data
   */
  const totalEntries = data.length;

  /**
   * Total pagination indexes for the table
   */
  /**
   * ```powershell
   * Total Pagination = [Total entries] ÷ [Entries shown]
   * Rounded to the ceiling
   * ```
   */
  let totalPaginationIndexes = Math.ceil(totalEntries / entriesShown);

  const tpiRef = useRef(Math.ceil(totalEntries / entriesShown));

  const totalDataRef = useRef(totalEntries);
  // log({ tpiRef, totalDataRef });

  /**
   *
   */
  let dataToShow = [...data];
  let startingIndex = 0;
  let endingIndex = 0;

  /**
   * Function that gets the value of the `<select>` element inside the `<ShowEntries />` component
   */
  useEffect(() => {
    if (paging) {
      //If the old Total Pagination Index is different than the new one → update the Page Index
      correctPaginationIndex();

      //We set the start and ending index depending on the pagination index
      setStartAndEndIndex();

      //We check if foesn't voerflow or underflow
      const paginationIndexOverflows = paginationIndex > totalPaginationIndexes;
      if (paginationIndexOverflows) {
        //paginationIndex = totalPaginationIndex
        setPaginationIndex(totalPaginationIndexes);
      }

      const paginationIndexUnderflows = paginationIndex < 1;
      if (paginationIndexUnderflows) {
        //paginationIndex = totalPaginationIndex
        setPaginationIndex(1);
      }

      //Set the indexes to send them to the <EntriesIndex /> component
      setUsefulIndexes({ startingIndex, endingIndex });

      //If the array needs to be sorted
      if (needsSorting) {
        resetSortedData();

        let newArrayOfSortedData = sortArrayOfObjects(
          copiedData,
          sortingValue,
          isReverse
        );

        if (needsFiltering) {
          newArrayOfSortedData = filterArrayByString(
            newArrayOfSortedData,
            queryInputted
          );
          // Update the total pagination indexes after filtering the data
        }
        tpiRef.current = Math.ceil(newArrayOfSortedData.length / entriesShown);
        totalDataRef.current = newArrayOfSortedData.length;
        paginationIndex > tpiRef.current ? setPaginationIndex(1) : null;

        setSortedData(newArrayOfSortedData);

        resetDataToShow();
        fillInDataToShow(newArrayOfSortedData);

        setValues(getArrayObjectValues(dataToShow));
      } else {
        //We reset the data inside the <tbody> to avoid pile-ups
        resetDataToShow();

        //We create the data that must be shown
        let arrayOfData = copiedData.length ? copiedData : data;

        if (needsFiltering) {
          arrayOfData = filterArrayByString(arrayOfData, queryInputted);
          // Update the total pagination indexes after filtering the data
          // log({ tpiRef });
        }
        tpiRef.current = Math.ceil(arrayOfData.length / entriesShown);
        paginationIndex > tpiRef.current ? setPaginationIndex(1) : null;
        totalDataRef.current = arrayOfData.length;

        fillInDataToShow(arrayOfData);
        //We re-render the component with the new values for the body
        setValues(getArrayObjectValues(dataToShow));
      }
    } else {
      if (needsSorting) {
        resetSortedData();

        let newArrayOfSortedData = sortArrayOfObjects(
          copiedData || data,
          sortingValue,
          isReverse
        );

        if (needsFiltering) {
          newArrayOfSortedData = filterArrayByString(
            newArrayOfSortedData,
            queryInputted
          );
          log({ filtered: newArrayOfSortedData });
          // Update the total pagination indexes after filtering the data
        }
        totalDataRef.current = newArrayOfSortedData.length;

        setSortedData(newArrayOfSortedData);

        fillInDataToShow(newArrayOfSortedData);

        setValues(getArrayObjectValues(newArrayOfSortedData));
      } else {
        let arrayOfData = copiedData.length ? copiedData : data;

        if (needsFiltering) {
          arrayOfData = filterArrayByString(arrayOfData, queryInputted);
          log({ filtered: arrayOfData });
          // Update the total pagination indexes after filtering the data
        }
        totalDataRef.current = arrayOfData.length;

        fillInDataToShow(arrayOfData);

        setValues(getArrayObjectValues(arrayOfData));
      }
    }
  }, [
    entriesShown,
    paginationIndex,
    sortingValue,
    isReverse,
    queryInputted,
    needsFiltering,
    totalPaginationIndexes,
  ]);

  //Get the data the developer added in props
  useEffect(() => {
    setCopiedData(deepCopy(data));
  }, []);

  useEffect(() => {
    if (developerWantsScrolling) {
      const newHeight = { height: height + "px" };
      setScrollStyleHeight(newHeight);
      paging = false;
    }
  }, [scroll, height]);

  useEffect(() => {
    const updateContainerStyle = () => {
      const isOnMobile = window.matchMedia("(max-width: 768px)").matches;
      if (developerWantsScrolling) {
        setScrollStyleHeight({
          height: `${height + (isOnMobile ? 1000 : 0)}px`,
        });
      }
    };

    updateContainerStyle();
    // Add listener to update the style on media query change
    window.addEventListener("resize", updateContainerStyle);

    return () => {
      // Remove listener on component unmount
      window.removeEventListener("resize", updateContainerStyle);
    };
  }, [height, scroll]);

  /**
   * Function that corrects the pagination index making relative to the previous percentage of the table seen
   */
  function correctPaginationIndex() {
    setHistoryTotalPaginationsArray([
      ...historyTotalPaginationsArray,
      totalPaginationIndexes,
    ]);

    setHistoryPaginationsArray([...historyPaginationsArray, paginationIndex]);

    const historyPaginationsExceededTwo =
      historyTotalPaginationsArray.length + 1 > 2;
    if (historyPaginationsExceededTwo) {
      /**
       * ```powershell
       *[New PI] = [Previous PI] × [New TPI] ÷ [Old TPI]
       * ```
       */
      setHistoryTotalPaginationsArray((values) => {
        return values.slice(1);
      });
      setHistoryPaginationsArray((values) => {
        return values.slice(1);
      });
    }
    let oldTotalPaginationIndex = historyTotalPaginationsArray?.[0];
    let newTotalPaginationIndex = totalPaginationIndexes;
    let oldPaginationIndex = Number(historyPaginationsArray?.[0]);

    /**
     * Verifies that the user changed the amount of entries and that the Pagination index is over one
     */
    const userChangedShownEntries =
      oldTotalPaginationIndex > tpiRef.currentewTotalPaginationIndex &&
      newTotalPaginationIndex > 1;

    if (userChangedShownEntries) {
      let computedPaginationArray =
        Number(
          (
            (oldPaginationIndex / oldTotalPaginationIndex) *
            newTotalPaginationIndex
          ).toFixed(0)
        ) || 1;

      setPaginationIndex(computedPaginationArray);
    }
  }

  /**
   * Function that settles the starting and ending indexes
   */
  function setStartAndEndIndex() {
    //We get the starting and ending index
    startingIndex = (paginationIndex - 1) * entriesShown;
    const indexUnderflows = startingIndex < 0;
    if (indexUnderflows) {
      startingIndex = 0;
    }

    endingIndex = startingIndex + entriesShown;

    //We check if the end index overflows
    const indexOverflowsArray = endingIndex > totalEntries;
    if (indexOverflowsArray) {
      endingIndex = totalEntries;
    }
  }

  /**
   * Function that sets the `dataToShow` variable containing the table rows to show as an empty array
   */
  function resetDataToShow() {
    dataToShow = [];
  }

  /**
   * Function that fills in
   */
  function fillInDataToShow(array) {
    for (let i = startingIndex; i < endingIndex; i++) {
      const item = array[i];
      dataToShow.push(item);
    }
  }

  /**
   * We reset the sorted data to equal to the original data
   */
  function resetSortedData() {
    // sortedData = [...copiedData];
    sortedData = deepCopy(copiedData);
  }

  /**
   *
   * Function that sorts the table by a property when clicked
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event React event
   */
  function handleArraySortingByClick(event) {
    //We get the sorting property
    const sortingProperty = event.target.dataset.dataTableSortingProperty;
    //Look if we need to reverse it
    const isSortingInReverse = JSON.parse(
      event.target.dataset.dataTableSortToReverse
    );

    if (isSortingInReverse) {
      setButtonActive({ top: false, bottom: true });
    } else {
      setButtonActive({ top: true, bottom: false });
    }
    //Enables sorting
    setNeedsSorting(true);
    //Sets the property to sort by
    setSortingValue(sortingProperty);
    //Sends the user to the pagination index of 1
    setPaginationIndex(1);
  }

  return (
    <div className="DataTable__container" style={scrollStyleHeight}>
      <table
        className={`DataTable ${
          developerWantsScrolling ? "DataTable--scroll" : ""
        }`}
      >
        <caption className="DataTable__caption">
          {title}
          <section className="DataTable__entries-query-container">
            <ShowEntries
              setEntriesShown={setEntriesShown}
              lengthMenu={lengthMenu}
              hasPaging={paging}
              isScrolling={scroll}
            />
            <QuerySearch
              hasFilter={filter}
              setQueryInputted={setQueryInputted}
              setNeedsFiltering={setNeedsFiltering}
            />
          </section>
        </caption>
        <thead
          className={`DataTable__head ${
            developerWantsScrolling ? "DataTable__head--scroll" : ""
          }`}
        >
          <tr className="DataTable__row DataTable__head-row">
            {data.length &&
              properties.map((property, index) => {
                //We set back the property
                let unformattedProperty = setTitlecaseToCamelCase(property);

                return (
                  <th
                    key={properties + index}
                    className="DataTable__cell DataTable__head-cell"
                  >
                    {property}
                    <div
                      className={`DataTable__buttons-container ${
                        !sort ? "hide" : ""
                      }`}
                    >
                      <button
                        type="button"
                        className={`DataTable__head-button DataTable__head-button-normal ${
                          !!buttonActive.top &&
                          !buttonActive.bottom &&
                          sortingValue === unformattedProperty
                            ? "DataTable__head-button--active"
                            : ""
                        }`}
                        onClick={(e) => {
                          handleArraySortingByClick(e);
                          //Set the sorted array in reverse or not
                          setReverse("asc");
                        }}
                        data-data-table-sorting-property={`${unformattedProperty}`}
                        data-data-table-sort-to-reverse={false}
                      >
                        ▲
                      </button>
                      <button
                        type="button"
                        className={`DataTable__head-button DataTable__head-button-reverse ${
                          !buttonActive.top &&
                          !!buttonActive.bottom &&
                          sortingValue === unformattedProperty
                            ? "DataTable__head-button--active"
                            : ""
                        }`}
                        onClick={(e) => {
                          handleArraySortingByClick(e);
                          //Set the sorted array in reverse or not
                          setReverse("desc");
                        }}
                        data-data-table-sorting-property={`${unformattedProperty}`}
                        data-data-table-sort-to-reverse={true}
                      >
                        ▼
                      </button>
                    </div>
                  </th>
                );
              })}
          </tr>
        </thead>
        <tfoot
          className={`DataTable__foot ${
            developerWantsScrolling ? "DataTable__foot--scroll" : ""
          }`}
        >
          <tr
            className={`DataTable__row DataTable__foot-row ${
              developerWantsScrolling ? "DataTable__foot-row--scroll" : ""
            }`}
          >
            <td className="DataTable__cell DataTable__foot-cell DataTable__foot-cell-entries">
              <EntriesIndex
                totalAmountOfEntries={totalEntries}
                currentStartIndex={usefulIndexes.startingIndex}
                currentEndIndex={usefulIndexes.endingIndex}
                isFiltered={needsFiltering}
                filteredAmountOfEntries={totalDataRef.current}
                isScrolling={scroll}
                hasInfo={info}
              />
            </td>
            <td className="DataTable__cell DataTable__foot-cell DataTable__foot-cell-pagination">
              <PaginationIndex
                totalPaginationIndexes={tpiRef.current}
                setCurrentPaginationIndex={setPaginationIndex}
                currentPaginationIndex={paginationIndex}
                isScrolling={scroll}
                hasPaging={paging}
              />
            </td>
          </tr>
        </tfoot>
        <tbody
          className={`DataTable__body ${
            developerWantsScrolling ? "DataTable__body--scroll" : ""
          }`}
        >
          {data.length &&
            values &&
            values.map((valueArray, index) => {
              return (
                <tr
                  className={`DataTable__row DataTable__body-row ${
                    developerWantsScrolling ? "DataTable__body-row--scroll" : ""
                  }`}
                  key={valueArray.toString() + index}
                >
                  {valueArray.map((value, index) => {
                    return (
                      <td
                        key={value + index}
                        className="DataTable__cell DataTable__body-cell"
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              );
            })}

          {/* {!totalDataRef.current && !isFiltered && (
          <tr className="DataTable__row DataTable__body-row">
            <td className="DataTable__cell DataTable__body-cell">
              No data available to display
            </td>
          </tr>
        )} */}
        </tbody>
      </table>
    </div>
  );
}

//Adding types to the props of the JS component
DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  sort: PropTypes.bool,
  filter: PropTypes.bool,
  scroll: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  info: PropTypes.bool,
  lengthMenu: PropTypes.arrayOf(PropTypes.number),
  paging: PropTypes.bool,
};
