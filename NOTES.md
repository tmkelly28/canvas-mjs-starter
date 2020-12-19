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
- The *basis* of a vector space is the set of linearly independent vectors that span the full space

## Linear Transformations and Matrices
