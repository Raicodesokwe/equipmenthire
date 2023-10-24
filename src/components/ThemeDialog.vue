<template>
    <div class="customize-theme" @click="closeDialog">
        <div class="card">
            <h2>Customize your view</h2>
            <p class="text-muted">Manage your font size, color and background</p>
            <div class="font-size">
                <h4>Font Size</h4>
                <div>
                    <h6>
                        Aa
                    </h6>
                    <div class="choose-size">
                        <span class="font-size-1" :class="{active:activeSpan === 'font-size-1'}"  @click="setActiveSpan('font-size-1')"></span>
                        <span class="font-size-2" :class="{active:activeSpan === 'font-size-2'}"  @click="setActiveSpan('font-size-2')"></span>
                        <span class="font-size-3" :class="{active:activeSpan === 'font-size-3'}"  @click="setActiveSpan('font-size-3')"></span>
                        <span class="font-size-4" :class="{active:activeSpan === 'font-size-4'}"  @click="setActiveSpan('font-size-4')"></span>
                        <span class="font-size-5" :class="{active:activeSpan === 'font-size-5'}"  @click="setActiveSpan('font-size-5')"></span>
                    </div>
                    <h3>Aa</h3>
                </div>
            </div>
            <div class="color">
                <h4>Color</h4>
                <div class="choose-color">
                    <span class="color-1" :class="{active:activeColor === 'color-1'}" @click="setActiveColor('color-1')"></span>
                    <span class="color-2" :class="{active:activeColor === 'color-2'}" @click="setActiveColor('color-2')"></span>
                    <span class="color-3" :class="{active:activeColor === 'color-3'}" @click="setActiveColor('color-3')"></span>
                    <span class="color-4" :class="{active:activeColor === 'color-4'}" @click="setActiveColor('color-4')"></span>
                    <span class="color-5" :class="{active:activeColor === 'color-5'}" @click="setActiveColor('color-5')"></span>
                </div>
            </div>
            <div class="background">
                <h4>Background</h4>
                <div class="choose-bg">
                    <div class="bg-1" :class="{active:activeBackground === 'bg-1'}" @click="setActiveBackground('bg-1')">
                        <span></span>
                        <h5 for="bg-1">Light</h5>
                    </div> 
                    <div class="bg-2" :class="{active:activeBackground === 'bg-2'}" @click="setActiveBackground('bg-2')">
                        <span></span>
                        <h5 for="bg-2">Dim</h5>
                    </div> 
                    <div class="bg-3" :class="{active:activeBackground === 'bg-3'}" @click="setActiveBackground('bg-3')">
                        <span></span>
                        <h5 for="bg-3">Lights Out</h5>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ThemeDialog',
  data(){
    return{
        activeSpan:'font-size-1',
        fontSize:'10px',
        activeColor:'color-1',
        activeBackground:'bg-1',
    }
  },
  methods:{
    closeDialog() {
        if (event.target.classList.contains('customize-theme')) {
      this.$emit('closeDialog');
        }
    },
    setActiveSpan(spanName){
          this.activeSpan=spanName;
          if(spanName==='font-size-1'){
            this.fontSize='10px';
            document.documentElement.style.setProperty('--sticky-top-left','5.4rem');
            document.documentElement.style.setProperty('--sticky-top-right','5.4rem');
          }
          else if(spanName==='font-size-2'){
            this.fontSize='13px';
            document.documentElement.style.setProperty('--sticky-top-left','5.4rem');
            document.documentElement.style.setProperty('--sticky-top-right','-7rem');
          }
          else if(spanName==='font-size-3'){
            this.fontSize='16px';
            document.documentElement.style.setProperty('--sticky-top-left','-2rem');
            document.documentElement.style.setProperty('--sticky-top-right','-17rem');
          } 
          else if(spanName==='font-size-4'){
            this.fontSize='19px';
            document.documentElement.style.setProperty('--sticky-top-left','-5rem');
            document.documentElement.style.setProperty('--sticky-top-right','-25rem');
          }  
           else if(spanName==='font-size-5'){
            this.fontSize='22px';
            document.documentElement.style.setProperty('--sticky-top-left','-12rem');
            document.documentElement.style.setProperty('--sticky-top-right','-35rem');
          }
          document.documentElement.style.fontSize=this.fontSize;
    },
    setActiveColor(colorName){
        this.activeColor=colorName;
        if(colorName==='color-1'){
            document.documentElement.style.setProperty('--color-primary','hsl(252, 75%, 60%)');
        }
        else if(colorName==='color-2'){
            document.documentElement.style.setProperty('--color-primary','hsl(52, 75%, 60%)');
        }
        else if(colorName==='color-3'){
            document.documentElement.style.setProperty('--color-primary','hsl(352, 75%, 60%)');
        } 
        else if(colorName==='color-4'){
            document.documentElement.style.setProperty('--color-primary','hsl(152, 75%, 60%)');
        }  
        else if(colorName==='color-5'){
            document.documentElement.style.setProperty('--color-primary','hsl(202, 75%, 60%)');
        }
    },
    setActiveBackground(backgroundName){
        this.activeBackground=backgroundName;
        if(backgroundName==='bg-1'){
            document.documentElement.style.setProperty('--dark-color-lightness','17%');
            document.documentElement.style.setProperty('--light-color-lightness','95%');
            document.documentElement.style.setProperty('--white-color-lightness','100%');
        }
         else if(backgroundName==='bg-2'){
            document.documentElement.style.setProperty('--dark-color-lightness','95%');
            document.documentElement.style.setProperty('--light-color-lightness','15%');
            document.documentElement.style.setProperty('--white-color-lightness','20%');
        } else if(backgroundName==='bg-3'){
            document.documentElement.style.setProperty('--dark-color-lightness','95%');
            document.documentElement.style.setProperty('--light-color-lightness','0%');
            document.documentElement.style.setProperty('--white-color-lightness','10%');
        }
    }
  }
  
}
</script>

<style>
   @import '@/assets/styles/styles.css';
</style>