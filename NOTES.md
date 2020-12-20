# Notes for the Essence of Linear Algebra

## Linear Combinations, Spans and Basis Vectors
- *i-hat*: the unit vector in the x direction [1, 0]
- *j-hat*: the unit vector in the y direction [0, 1]
- When we think of the coordinates of a vector, we can actually think of them as a pair of scalars
that scale the their respective unit vector. The vector the two coordinates represent then, is the
linear combination of the two scaled unit vectors.
- i-hat and j-hat are the *basis vectors* of a coordinate system. The basis vectors of a system are
the vectors that are "scaled" when thinking about vectors as the linear combination of a pair of scaled vectors
- A *linear combinatinon*, more specifically, is defined as `(a * v) + (b * w)`
  - v and w are both vectors, and a and b are both scalars, and in the set of all real numbers
- The *span* of v and w is the set of all of their possible linear combinations
- If the span of two vectors, v and w, would be the same if one of the vectors was removed, we say that v and w are *linearly dependent*. 
  - In 2d space, this is what happens if the two basis vectors lie on top of each other
  - If this is not the case, the two vectors are *linearly independent*
- The *basis* of a vector space is the set of _linearly independent_ vectors that _span_ the full space

## Linear Transformations and Matrices

- *Linear transformations*
  - a _transformation_ is just a fancy word for function, but suggestive of movement
  - a transformation is linear if has two properties:
    - lines must remain lines (without becoming curved)
    - the origin must remain fixed in place
    - you can also think of this as keeping grid lines parallel and evenly spaced
  - for any linear transformation, if you know where i-hat and j-hat land, you can deduce where any vector will land by applying the same linear combination of `(a * v) + (b * w)`, where v and w are the new tips of i-hat/j-hat
    - any linear transformation can be described by just 4 numbers - the coordinates of where i-hat and j-hat land
  - a 2x2 matrix can be read as the coordinates where i-hat and j-hat land. The first column is the coordinates of where i-hat lands, and the second column is the coordinates of where j-hat lands
  - Note: if the two columns are linearly dependent, it squishes 2D space down to 1d line (essentially, we go down a dimension)

## Matrix Multiplication as Composition
- The product of two matrices can be thought of in terms of where i-hat and j-hat land after applying their successive transformations

## The Determinant

- Something we might want to know about a linear transformation is how much something is stretched or squished. Something we can use to think about this is the are "between" i-hat and j-hat
- To calculate the *determinant* of a linear transformation, take the unit square defined by i-hat and j-hat, and see how its area changes as a result of the transformation
  - Technically, the determinant is the factor by which the linear transformation scales any area
- Note that the determinant can be negative - this has to do with the orientation of space. Whenever the orientation of space has been inverted, the determinant will be negative
- Formula:

```
a b   determinant: ad - bc
c d
```
- When the two columns of the matrix describe linearly dependent vectors, the determinant will be 0

## Inverse Matrices, Column Space, Null Space

- The *inverse matrix* of a matrix is a matrix that describes how to "undo" the transformation played by the original matrix
- The *identity transformation* is the transformation that does nothing. A matrix A and its inverse multiplied together will result in the identity transformation
- Note that there no inverse if the determinant is 0, that is, if the transformation drops a dimension
- *Rank* is another term for the number of dimensions in the output of a linear transformation.
- The *column space* of a 2d matrix is the span of the two columns (vectors) described by the matrix
- The *null space* (or *kernel*) of a matrix is the set of all vectors that "land on" (that is, become) [0, 0] as a result of the transformation

## Dot Products and Duality
