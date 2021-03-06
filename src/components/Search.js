import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 500);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async () => {
          const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
              action: 'query',
              list: 'search',
              origin: '*',
              format: 'json',
              srsearch: debouncedTerm,
            },
          });
     
          setResults(data.query.search);
        };
        if (debouncedTerm) {
          search();
        }
      }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className='item' style={{ padding: 15 }}>
                <div className="right floated content">
                    <a
                        className="ui teal button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header" style={{ marginBottom: 5 }}>
                        {result.title}
                    </div>
                    {/* Be careful for XSS attacks when running this */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}>
                    </input>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}



export default Search;