<template>
  <div class="header pb-6">
    <div class="container-fluid">
      <div class="header-body">
        <Breadcrumb> </Breadcrumb>
        <!-- Card stats -->
        <div class="row" v-for="card in cards">
          <StatsCard> </StatsCard>
        </div>
      </div>
    </div>
  </div>
</template>
