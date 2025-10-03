---
layout: post
title: "Exploring Geometric Strings to Linear algebra: Preview"
excerpt: "Exploring connections that linear algebra has to higher concepts and current research in geometry. Views are flavoured by author's interests."
category: Mathematics
tag: featured
---

#### _Disclaimer_
_As I am also still learning, there will certainly be no shortage of errors. Please reach out if you find any particularly egregious ones!_

### Article series
1. Preview (this post)
2. Analytic geometry of euclidean space
3. Bilinear forms
4. Group representations
5. Spectral theory
6. Traces

---- 

### Why?
It is not difficult to see, if you look hard enough, that everything is connected, especially in mathematics. In this post (and the next five), we will explore the connections of linear algebra with geometry. 

Most people I know were taught linear algebra as though it were being taught to engineers. They are mostly given methods and operations to work on matrices. In other jurisdictions, linear algebra might be a student’s first proof-based course. This approach has many advantages over that of using methods, particularly for students who may wish to go on to do mathematics research, or generally, anyone who wants to have a better appreciation of what they are studying. 

So in this post, I would like to motivate the need to look at linear algebra this way and talk about some of its connections to higher concepts in research. Since I am geometry-oriented, I would like to give this series a “geometric” twist. It is my intent that what comes out will be an exploration of linear algebra’s geometric connections to some higher concepts and areas of current research that I am aware of. This will be a five-part series which covers the following topics:
1. Analytic geometry of euclidean space
2. Bilinear forms
3. Group representations
4. Spectral theory
5. Traces
We will explore a gist of what is to come for the rest of the post.

### Analytic geometry of euclidean space.
One of the most important properties of linear or vector spaces is that, there is a unique point \\\(0\\\) known as the origin. When that condition is relaxed so that any point can be regarded as an origin, we obtain what is called the euclidean \\\(n\\\)-space \\\(\mathbb{E}^n\\\) when we assume some typical rules. This space also generalises to what is called an affine space.

A euclidean space is inherently geometric, while a vector space is not. Euclidean geometry, the geometry attributed to Euclid which took shape over 2000 years ago, as an abstraction of our physical space, is a set of rules (called axioms) about how points and lines interact. However, in modern language, this geometry can be reimagined in a coordinate space of the same name. This view of geometry, called analytic geometry, contrasts with the former, called synthetic geometry.

In linear algebra, the properties of the transformations that preserve this linear structure are of utmost importance. Similarly, the essence of the geometry has now shifted from the shapes themselves, like a triangle or square, to the transformations that preserve certain properties of the space itself, not any particular shape in it. This line of thought is so significant in mathematics that it has a name: Erlangen Program.

Therefore, as a first step, the euclidean space can be seen as a “geometrisation” of the vector space. With this in place, who knows in which directions we can go!

### Bilinear forms.
Suppose you have a set \\(X\\). The formalisation of a distance between any two points in that set is called a metric, say \\\(d\\) (in which case you now have a metric space \\((X,d)\\)). Further, you can impose a kind of loose geometry on this same set, which says there is some relationship between the points, called a topology \\(\tau\\) (together you get a topological space \\((X,\tau)\\)). These two concepts are related because it can be said that a metric induces a topology, or in our parlance, that a metric induces some kind of relationship between the points in \\(X\\). 

Now, these are abstractions that rose out of specific cases. In applications like engineering, you cannot simply impose these structures. For example, one important space that arises in several applications (quantum mechanics, Fourier series, all kinds of modelling with PDEs) is the Hilbert space. The Hilbert space, as you might know, is a complete inner product space. That is, a linear space which preserves the inner product with the additional property of completeness. The inner product will induce a norm, which will in turn induce a metric. This inner product is a prototypical example of a bilinear form.

Algebraically, the inner product controls the geometry of the vector n-space. The concepts of orthogonality and projections of vectors, and all their associated theory, are determined by the dot product (where inner products were generalised from). The inner product allows you to define distance. Suppose \\(X\\) is a Hilbert space. If \\(x,y\in X\\), then \\({\|x\|} ={(x\cdot x)}^2\\). It also enables you to define angles: for the same elements in \\(X\\), \\(x\cdot y=\|x\|\|y\|\cos\theta\\). Further, it is outstanding that the properties of the euclidean n-space are wholly determined by the symmetric nature of the inner product. More explicitly, the particular characteristics of the finite dimensional euclidean vector space, say \\(X= \mathbb{E}^n\\), is due to the symmetric property of its bilinear form. Given a field \\(\mathbb{F}\\), a bilinear form \\(B:X\times X\rightarrow \mathbb{F}\\) can have the following property: \\[B(x,y)=B(y,x)\quad\mathrm{for all}\quad x,y\in X.\\] This is what is referred to as symmetry. By definition, this property should allow you to define a metric, since the distance between two points should be the same regardless of which of the two points you start measuring from. The angle between points follows similarly: \\[x\cdot y=\|x\|\|y\|\cos\theta= \|y\|\|x\|\cos\theta=y\cdot x.\\] 

Finally, we show that the symmetry property also enables us to define orthogonal bases. An orthogonal basis of \\(X\\) gives a decomposition of \\(X\\) into an orthogonal direct sum of lines: \\(X = W_1 \perp W_2 \perp \dots \perp W_n\\), where \\(W_i=Fe_i\\). While a euclidean space is an example of a symmetric bilinear form, the notion of an orthonormal basis usually doesn’t exist outside a euclidean space. This is because an orthonormal basis should be an orthogonal basis \\(\{e_1, \ldots, e_n\}\\) in which \\(B(e_i,e_i)=1\\) for all \\(i\\). Thus, for any field which is a subset of the reals (because \\(W_i\subset \mathbb{R}\\)), some combinations will not have solutions. An example is using \\(\mathbb{Q}^2\\) instead of \\(\mathbb{R}^2\\) for the equation \\(2x^2 + 3y^2=1\\), which has no rational equations. Without going into many details, the passage from general bilinear forms to matrices requires additional an additional property known as non-degeneracy. Once that is in place, we see that the matrix representing a bilinear form in an orthogonal basis is diagonal (the entries outside the main diagonal are zero), and thus is a symmetric matrix. This is exactly why orthogonal bases are only defined for symmetric bilinear spaces. 

It is useful to study bilinear forms abstractly. It leads to many important directions. One interesting example is the alternating bilinear forms. Using these types of bilinear forms, we can define symplectic bases. Symplectic geometry is an area of active research with applications in physics. From here, we can go a great many directions.

### Group representations.
A strong concept in geometry is symmetry; that is, repetitive patterns that exist in a system under consideration. The concept of a group dates back to Évariste Galois, who introduced groups as a way to study symmetry in algebraic equations. In the late nineteenth century, Sophus Lie leveraged this idea to study continuous symmetries, now called Lie groups, in differential equations. Lie groups are groups that also happen to be a differential manifold. 

The importance of group representations is reducing group-theoretic problems to problems in linear algebra, which are well understood. In modern physics, group representations are crucial because of the emphasis on studying the symmetries of a physical system. Groups whose representations are of particular importance include the rotation group \\(SO(3)\\) and special unitary group \\(SU(3)\\).

The idea of group representations is simple (enough). We will restrict ourselves to finite representations (representations of finite dimensional linear spaces). Let \\(G\\) be a group. A representation of \\(G\\) is a map \\[\rho: G\rightarrow GL(n,\mathbb{F})\\] such that \\(\rho(g_1,g_2)=\rho(g_1)\rho(g_2)\\), for all \\(g_1,g_2\in G\\). Note that \\(GL(X)\\) is identified with the group of \\(n\\)-by-\\(n\\) invertible matrices on a field \\(\mathbb{F}\\), \\(GL(n,\mathbb{F})\\), if \\(X\\) is finite, of say dimension \\(n\\), and a basis is chosen.

Other times, the geometry appears… well, less geometric. I would say moduli spaces fit into this category (apologies to the algebraic geometers). Moduli spaces are solutions to geometric classification problems.

We can understand moduli spaces as a space of parameters. In algebraic geometry, there is often the need to study curves (ring ring, the algebra in its name). By embedding a class of curves into a coordinate system, we can typically draw on the geometry it provides to wholly classify that batch of curves. This is known as the Geometric Invariant Theory, coined by David Mumford in the 1960s. It still has an influence on current research today.

In constructing the moduli space, the action of a group on an algebraic variety (in our case a vector space) is studied. This action manifests as representing a group as a linear transformation (mostly between finite groups). These representations in linear spaces form the bread and butter of algebraic geometry.

The takeaway is that group representations are at the centre of deep geometric applications. And all this stems from a simple idea: the realisation of groups as linear spaces.

### Spectral theory.
Again, take a linear space. Impose an inner product on it and make sure all sequences in that space converge. Voilà! We have a Hilbert space. One of the most important aspects of Hilbert space theory is the operators on those spaces. We assume the dimensions of all spaces under this section are finite.

The spectral theory of linear operators has to do with, put bluntly, properties of their eigenvalues and eigenvectors. This theory extends these to far-reaching consequences. It has a ton of uses in linear spaces.

The spectrum of a linear operator is the complement of the resolvent set of the same. The resolvent set characterises some notion of the linear operator being well-behaved in some sense.  

Leaving linear spaces, we can study spectral theory on manifolds. Differential operators, defined on differential manifolds, can be used to study properties of the manifold and the eigenfunctions and spectrum can help in that regard. Using asymptotics of the heat equation on a manifold, we can give an account of the Gauss-Bonnet theorem, an important theorem in differential geometry.

### Traces.
The traces of linear operators are fascinating. When a linear space is finite dimensional, the linear transformations between these linear spaces can be represented by matrices. The trace of such a linear transformation is given by the sum of the diagonals of the matrix, or as I prefer, the sum of the eigenvalues of the transformation. 

The trace has surprising connections to geometry. In complex hyperbolic geometry, the representations of some groups are studied. One particular representation, the special unitary group of 2 by 2 matrices with a Hermitian signature of 1, is of interest to geometers. It turns out that, given a matrix in this group, the characteristic polynomial of A can be expressed with the traces of A (and its inflections) as its coefficients. 

Using the characteristic equation, you can classify an element of this group as loxodromic, elliptic or hyperbolic. 

---- 

### Let’s go further.
* Learn precisely what the properties of a linear space are: wiki.
* Find out about affine spaces: wiki
* Look further into the foundations of geometry: analytic geometry, synthetic geometry, and Erlangen Program.
* Want to know more about bilinear forms and related concepts? These articles can be a start: inner product, dot product, bilinear forms, quadratic forms, sesquilinear forms. Lecture notes by Keith Conrad.
* Learn the basics of matrix theory: diagonal matrix, symmetric matrix.
* Look into some basic concepts of analysis: topology, metric, norm
* Check out this wiki to find out more on algebraic varieties.