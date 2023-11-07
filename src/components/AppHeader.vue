<template>
  <header class="AppHeader">
    <nav class="AppHeader__nav" aria-label="グローバルメニュー">
      <AppMenuTrigger />
      <div class="AppHeader__list" role="list">
        <div class="AppHeader__home" role="listitem">
          <router-link to="/" class="AppHeader__homeLink">
            <span class="AppHeader__headerLogo">
              <img src="@/assets/images/header.png" alt="ロゴ"/>
            </span>
          </router-link>
        </div>
        <div class="AppHeader__note" role="listitem">
          <router-link to="/production-note" class="AppHeader__noteLink">
          </router-link>
        </div>
        <div class="AppHeader__content">
          <AppMenu/>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
.AppHeader{
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1;
    background-color:rgba(#fff,0.9);
}

.AppHeader__nav{
    padding:0 160px 0 38px;
}

.AppHeader__headerLogo{
    margin-left:300px;
    float:right;
}
</style>
