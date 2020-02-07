import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { getCollections, addMovie, searchByMovieId } from "apis/collections"
import CollectionTag from "./CollectionTag"

const Flex = styled.div``
const CollectionsDropwdown = styled.select``

const MovieCollections = ({ movieData }) => {
  const { id, original_title, poster_path } = movieData
  const [collections, setCollections] = useState([])
  const [currentCollections, setCurrentCollections] = useState([])

  const updateCollectionList = async () => {
    const collections = await getCollections()
    setCollections(collections)
  }

  useEffect(() => {
    updateCollectionList()
  }, [])

  useEffect(() => {
    const currentCollections = collections.filter(collection =>
      collection.movieIds.includes(id)
    )
    setCurrentCollections(currentCollections)
  }, [collections, id])

  const handleOnChange = async event => {
    await addMovie(event.target.value, { id, original_title, poster_path })
    updateCollectionList()
  }

  const handleRemoveFromCollection = collectionId => {}

  return (
    <Flex>
      <Flex>
        {currentCollections.map(collection => (
          <CollectionTag
            key={collection.id}
            label={collection.name}
            onDelete={() => handleRemoveFromCollection(collection.id)}
          />
        ))}
      </Flex>
      <CollectionsDropwdown onChange={handleOnChange}>
        <option>Agregar a colección</option>
        {collections.map(collection => (
          <option key={collection.id} value={collection.id}>
            {collection.name}
          </option>
        ))}
      </CollectionsDropwdown>
    </Flex>
  )
}

export default MovieCollections
