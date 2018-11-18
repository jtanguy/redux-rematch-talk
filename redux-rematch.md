---
title: Redux + Rematch
author: Julien Tanguy
---

> Adressons l'éléphant dans la pièce: il est très difficile de passer à côté de Redux en faisant du React.
>
> Dans ce talk nous verrons les bases de cette lib, et les raisons pour lesquelles elle est si attractive pour beaucoup.
>
> Nous verrons également des outils, des approches et des techniques pour mieux gérer la complexité de la gestion de l'état d'une application Web.


# Gestion de l'état

* user
* language


# Why

Bref rappel du pourquoi redux, en une slide de code avec un state ingérable

* Prop drilling
* composition d'états

# Why not

> “You might not need Redux”

– Dan Abramov

## Use the Context, Luke

# Redux === Code applicatif

# Concepts

## Actions

Les actions sont les éléments de base de redux

## Reducers

Reducers, ou reducer functions

## Store

getState + dispatch

# Devtools


# Architecture

![](https://staltz.com/img/redux-unidir-ui-arch.jpg)


# Utilisation avec React

* Connect
* container vs components

## Asynchrone

* redux thunk

* je ne parlerai pas des sagas


## Instant protip

* redux-api-middleware non, et pourquoi (mélange de commandes et d'events, middleware)

* redux-form non, et pourquoi

# Overdose de verbosité

* trop d'action creators
* et de
* code
* dans pleins de fichiers


## Instant protip

containers vs components => screens et components/ui

# Redux ducks

https://github.com/erikras/ducks-modular-redux


# Tests

jest


# Rematch

[](https://hackernoon.com/redesigning-redux-b2baee8b8a38)

rematch = ducks + thunk 


## Eventsourcing

* Bien insister sur le concept d'évènement, de fait passé
* parallèle effect/command


## Instant protiop

* revenir dans les devtools


## Exemple boite de commentaire

mini formulaire: add + edit

* import/export

Historique ?

BOOM! même import


# Liens

* <https://redux.js.org>
* Rematch
