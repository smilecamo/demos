<template>
  <div>
    <h1>我是about{{$route.params.newId}}</h1>
    <nuxt-child />
    <ul>
      <li>
        <nuxt-link to="/">zhuye</nuxt-link>
      </li>
    </ul>
  </div>
</template>
