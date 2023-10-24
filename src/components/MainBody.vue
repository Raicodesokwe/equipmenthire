<template>
     <main>
    <div class="container">
      <div class="left">
          <a class="profile">
            <div class="profile-photo">
              <img src="@/assets/profile-1.jpg" alt="">
            </div>
            <div class="handle">
              <h4>Erica De</h4>
              <p class="text-muted">
                @derica
              </p>
            </div>
          </a>
          <div class="sidebar">
            <a 
            class="menu-item"
            :class="{active:activeTab === 'home'}"
            @click="setActiveTab('home')"
            >
              <span><i class="uil uil-home"></i></span><h3>Home</h3>
            </a>
            <a class="menu-item"
            :class="{active:activeTab === 'explore'}"
            @click="setActiveTab('explore')"
            >
              <span><i class="uil uil-compass"></i></span><h3>Explore</h3>
            </a> 
            <a class="menu-item"
            :class="{active:activeTab === 'notification'}"
            @click="setActiveTab('notification')"
            id="notifications">
              <span><i class="uil uil-bell"><small class="notification-count" v-show='showCount'>9+</small></i></span><h3>Notifications</h3>
              <div class="notifications-popup"  v-show='toggle'>
                <div>
                  <div class="profile-photo">
                    <img src="@/assets/profile-2.jpg" alt="">
                  </div>
                  <div class="notification-body">
                    <b>Okre Fahmin</b> accepted your friend request
                    <small class="text-muted">2 DAYS AGO</small>
                  </div>
                </div>  
                <div>
                  <div class="profile-photo">
                    <img src="@/assets/profile-3.jpg" alt="">
                  </div>
                  <div class="notification-body">
                    <b>Jayne Kanuri</b> accepted your friend request
                    <small class="text-muted">1 HOUR AGO</small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img src="@/assets/profile-4.jpg" alt="">
                  </div>
                  <div class="notification-body">
                    <b>Terry Kipimo</b> accepted your friend request
                    <small class="text-muted">10 MINUTES AGO</small>
                  </div>
                </div> 
                <div>
                  <div class="profile-photo">
                    <img src="@/assets/profile-5.jpg" alt="">
                  </div>
                  <div class="notification-body">
                    <b>Nancy Tulum</b> accepted your friend request
                    <small class="text-muted">5 HOURS AGO</small>
                  </div>
                </div>
                <div>
                  <div class="profile-photo">
                    <img src="@/assets/profile-6.jpg" alt="">
                  </div>
                  <div class="notification-body">
                    <b>Ebi Wolof</b> accepted your friend request
                    <small class="text-muted">5 HOURS AGO</small>
                  </div>
                </div> 
                <div>
                  <div class="profile-photo">
                    <img src="@/assets/profile-7.jpg" alt="">
                  </div>
                  <div class="notification-body">
                    <b>Samba Mao</b> accepted your friend request
                    <small class="text-muted">2 HOURS AGO</small>
                  </div>
                </div>
              </div>
            </a> 
            <a class="menu-item" 
            :class="{active:activeTab === 'messages'}"
            @click="setActiveTab('messages')"
            id="messages-notifications">
              <span><i class="uil uil-envelope-alt"><small class="notification-count" v-show='showMessageCount'>6</small></i></span><h3>Messages</h3>
            </a> 
            <a class="menu-item"
            :class="{active:activeTab === 'bookmarks'}"
            @click="setActiveTab('bookmarks')"
            >
              <span><i class="uil uil-bookmark"></i></span><h3>Bookmarks</h3>
            </a> 
            <a class="menu-item"
            :class="{active:activeTab === 'analytics'}"
            @click="setActiveTab('analytics')"
            >
              <span><i class="uil uil-chart-line"></i></span><h3>Analytics</h3>
            </a>
            <a class="menu-item"
            :class="{active:activeTab === 'theme'}"
            @click="setActiveTab('theme')"
            >
              <span><i class="uil uil-palette"></i></span><h3>Theme</h3>
            </a> 
            <a class="menu-item"
            :class="{active:activeTab === 'settings'}"
            @click="setActiveTab('settings')"
            >
              <span><i class="uil uil-setting"></i></span><h3>Settings</h3>
            </a>
          </div>
          <label for="create-post" class="btn btn-primary">Create Post</label>
      </div>
      <div class="middle">
        <div class="stories">
          <div class="story">
            <div class="profile-photo">
              <img src="@/assets/profile-1.jpg" alt="">
            </div>
            <p class="name">Your Story</p>
          </div>
          <div class="story">
            <div class="profile-photo">
              <img src="@/assets/profile-9.jpg" alt="">
            </div>
            <p class="name">Delton Dangote</p>
          </div> 
          <div class="story">
            <div class="profile-photo">
              <img src="@/assets/profile-10.jpg" alt="">
            </div>
            <p class="name">Sani Kuti</p>
          </div>
          <div class="story">
            <div class="profile-photo">
              <img src="@/assets/profile-11.jpg" alt="">
            </div>
            <p class="name">Babalawo Tunde</p>
          </div>  
          <div class="story">
            <div class="profile-photo">
              <img src="@/assets/profile-12.jpg" alt="">
            </div>
            <p class="name">Ife Bolu</p>
          </div>
        </div>
        <form class="create-post">
          <div class="profile-photo">
            <img src="@/assets/profile-1.jpg">
          </div>
          <input type="text" placeholder="What's on your mind, Erica?" id="create-post">
          <input type="submit" value="Post" class="btn btn-primary">
        </form>
        <div class="feeds">
          <div class="feed">
             <div class="head">
               <div class="user">
                <div class="profile-photo">
                  <img src="@/assets/profile-13.jpg">
                </div>
                <div class="info">
                  <h3>Lana Rose</h3>
                  <small>Kilifi, 15 MINUTES AGO</small>
                </div>
               
               </div>
               <span class="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
             </div>
             <div class="photo">
              <img src="@/assets/feed-1.jpg">
             </div>
             <div class="action-buttons">
              <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="uil uil-bookmark-full"></i></span>
              </div>
             </div>
             <div class="liked-by">
                <span><img src="@/assets/profile-10.jpg"></span>
                <span><img src="@/assets/profile-4.jpg"></span>
                <span><img src="@/assets/profile-15.jpg"></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2 others</b></p>
             </div>
             <div class="caption">
              <p><b>Lana Rose</b> It's giving secreto del amor <span class="hash-tag">#secreto</span></p>
             </div>
             <div class="comments text-muted">
                View all 277 comments
             </div>
          </div> 
          <div class="feed">
             <div class="head">
               <div class="user">
                <div class="profile-photo">
                  <img src="@/assets/profile-8.jpg">
                </div>
                <div class="info">
                  <h3>Cecil Danone</h3>
                  <small>Kilifi, 15 MINUTES AGO</small>
                </div>
               
               </div>
               <span class="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
             </div>
             <div class="photo">
              <img src="@/assets/feed-5.jpg">
             </div>
             <div class="action-buttons">
              <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="uil uil-bookmark-full"></i></span>
              </div>
             </div>
             <div class="liked-by">
                <span><img src="@/assets/profile-10.jpg"></span>
                <span><img src="@/assets/profile-4.jpg"></span>
                <span><img src="@/assets/profile-15.jpg"></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2 others</b></p>
             </div>
             <div class="caption">
              <p><b>Cecil Danone</b> It's giving secreto del amor <span class="hash-tag">#secreto</span></p>
             </div>
             <div class="comments text-muted">
                View all 277 comments
             </div>
          </div><div class="feed">
             <div class="head">
               <div class="user">
                <div class="profile-photo">
                  <img src="@/assets/profile-9.jpg">
                </div>
                <div class="info">
                  <h3>Peri Itumbi</h3>
                  <small>Shamakhokho, 8 MINUTES AGO</small>
                </div>
               
               </div>
               <span class="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
             </div>
             <div class="photo">
              <img src="@/assets/feed-7.jpg">
             </div>
             <div class="action-buttons">
              <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="uil uil-bookmark-full"></i></span>
              </div>
             </div>
             <div class="liked-by">
                <span><img src="@/assets/profile-10.jpg"></span>
                <span><img src="@/assets/profile-4.jpg"></span>
                <span><img src="@/assets/profile-15.jpg"></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2 others</b></p>
             </div>
             <div class="caption">
              <p><b>Peri Itumbi</b> It's giving secreto del amor <span class="hash-tag">#secreto</span></p>
             </div>
             <div class="comments text-muted">
                View all 277 comments
             </div>
          </div>
          <div class="feed">
             <div class="head">
               <div class="user">
                <div class="profile-photo">
                  <img src="@/assets/profile-11.jpg">
                </div>
                <div class="info">
                  <h3>Ralf Kaisen</h3>
                  <small>Homa bay, 15 MINUTES AGO</small>
                </div>
               
               </div>
               <span class="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
             </div>
             <div class="photo">
              <img src="@/assets/feed-6.jpg">
             </div>
             <div class="action-buttons">
              <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="uil uil-bookmark-full"></i></span>
              </div>
             </div>
             <div class="liked-by">
                <span><img src="@/assets/profile-10.jpg"></span>
                <span><img src="@/assets/profile-4.jpg"></span>
                <span><img src="@/assets/profile-15.jpg"></span>
                <p>Liked by <b>Ubu Nnoka</b> and <b>2 others</b></p>
             </div>
             <div class="caption">
              <p><b>Ralf Kaisen</b> It's giving secreto del amor <span class="hash-tag">#secreto</span></p>
             </div>
             <div class="comments text-muted">
                View all 277 comments
             </div>
          </div><div class="feed">
             <div class="head">
               <div class="user">
                <div class="profile-photo">
                  <img src="@/assets/profile-10.jpg">
                </div>
                <div class="info">
                  <h3>Itupa Nnamdi</h3>
                  <small>Changamwe, 15 MINUTES AGO</small>
                </div>
               
               </div>
               <span class="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
             </div>
             <div class="photo">
              <img src="@/assets/feed-4.jpg">
             </div>
             <div class="action-buttons">
              <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="uil uil-bookmark-full"></i></span>
              </div>
             </div>
             <div class="liked-by">
                <span><img src="@/assets/profile-10.jpg"></span>
                <span><img src="@/assets/profile-4.jpg"></span>
                <span><img src="@/assets/profile-15.jpg"></span>
                <p>Liked by <b>Ernest Achiever</b> and <b>2 others</b></p>
             </div>
             <div class="caption">
              <p><b>Itupa Nnamdi</b> Damn, it's big <span class="hash-tag">#dampun</span></p>
             </div>
             <div class="comments text-muted">
                View all 277 comments
             </div>
          </div><div class="feed">
             <div class="head">
               <div class="user">
                <div class="profile-photo">
                  <img src="@/assets/profile-11.jpg">
                </div>
                <div class="info">
                  <h3>Soboma Igwe</h3>
                  <small>Malindi, 2 MINUTES AGO</small>
                </div>
               
               </div>
               <span class="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
             </div>
             <div class="photo">
              <img src="@/assets/feed-3.jpg">
             </div>
             <div class="action-buttons">
              <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="uil uil-bookmark-full"></i></span>
              </div>
             </div>
             <div class="liked-by">
                <span><img src="@/assets/profile-10.jpg"></span>
                <span><img src="@/assets/profile-4.jpg"></span>
                <span><img src="@/assets/profile-15.jpg"></span>
                <p>Liked by <b>Erica Supwi</b> and <b>2 others</b></p>
             </div>
             <div class="caption">
              <p><b>Soboma Igwe</b> Do re mi fa so <span class="hash-tag">#languageplease</span></p>
             </div>
             <div class="comments text-muted">
                View all 5 comments
             </div>
          </div>
          <div class="feed">
             <div class="head">
               <div class="user">
                <div class="profile-photo">
                  <img src="@/assets/profile-12.jpg">
                </div>
                <div class="info">
                  <h3>Jomba Mwanangu</h3>
                  <small>Diani, 15 MINUTES AGO</small>
                </div>
               
               </div>
               <span class="edit">
                  <i class="uil uil-ellipsis-h"></i>
                </span>
             </div>
             <div class="photo">
              <img src="@/assets/feed-2.jpg">
             </div>
             <div class="action-buttons">
              <div class="interaction-buttons">
                  <span><i class="uil uil-heart"></i></span>
                  <span><i class="uil uil-comment-dots"></i></span>
                  <span><i class="uil uil-share-alt"></i></span>
              </div>
              <div class="bookmark">
                <span><i class="uil uil-bookmark-full"></i></span>
              </div>
             </div>
             <div class="liked-by">
                <span><img src="@/assets/profile-10.jpg"></span>
                <span><img src="@/assets/profile-4.jpg"></span>
                <span><img src="@/assets/profile-15.jpg"></span>
                <p>Liked by <b>Aso Rock</b> and <b>5 others</b></p>
             </div>
             <div class="caption">
              <p><b>Jomba Mwanangu</b> Live fast man <span class="hash-tag">#fast5</span></p>
             </div>
             <div class="comments text-muted">
                View all 9 comments
             </div>
          </div>
        </div>
      </div>
      <div class="right">
         <div class="messages" 
            :class="{ theBox:showMessageShadow === true}">
          <div class="heading">
            <h4>Messages</h4>
            <i class="uil uil-edit"></i>
          </div>
          <div class="search-bar">
            <i class="uil uil-search"></i>
            <input type="search" placeholder="Search messages" v-model="searchQuery" id="message-search">
          </div>
          <div class="category">
            <h6 class="active">Primary</h6>
            <h6>General</h6>
            <h6 class="message-requests">Requests(7)</h6>
          </div>
          <div class="message" v-for="message in filteredMessages" :key="message.id">
            <div class="profile-photo">
            <img :src="message.profilePhoto" alt="">
            <div class="active" v-show="message.id===2||message.id===5"></div>
          </div>
          <div class="message-body">
            <h5>{{ message.name }}</h5>
           
            <p 
            :class=" message.id===2|| message.id===3?'text-bold':'text-muted'"
            >{{ message.message }}</p>
           </div>
          </div>
          
         </div>
         <div class="friend-requests">
             <h4>Requests</h4>
             <div class="request">
              <div class="info">
                <div class="profile-photo">
                  <img src="@/assets/profile-13.jpg" alt="">
                </div>
                <div>
                  <h5>Hajia Msitu</h5>
                  <p class="text-muted">
                    8 mutual friends
                  </p>
                </div>
              </div>
              <div class="action">
                    <button class="btn btn-primary">
                      Accept
                    </button>
                    <button class="btn">
                      Decline
                    </button>
              </div>
             </div> 
             <div class="request">
              <div class="info">
                <div class="profile-photo">
                  <img src="@/assets/profile-11.jpg" alt="">
                </div>
                <div>
                  <h5>Sabi Pesin</h5>
                  <p class="text-muted">
                    2 mutual friends
                  </p>
                </div>
              </div>
              <div class="action">
                    <button class="btn btn-primary">
                      Accept
                    </button>
                    <button class="btn">
                      Decline
                    </button>
              </div>
             </div>
             <div class="request">
              <div class="info">
                <div class="profile-photo">
                  <img src="@/assets/profile-12.jpg" alt="">
                </div>
                <div>
                  <h5>Brikicho Banture</h5>
                  <p class="text-muted">
                    No mutual friends
                  </p>
                </div>
              </div>
              <div class="action">
                    <button class="btn btn-primary">
                      Accept
                    </button>
                    <button class="btn">
                      Decline
                    </button>
              </div>
             </div>
         </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainBody',
  data() {
    return {
      activeTab: 'home', 
      toggle:false,
      showCount:true,
      showThemeModal:false,
      showMessageCount:true,
      showMessageShadow:false,
      searchQuery: '',
      searchList:[],
      messages:[
      {
          id: 1,
          name: 'Edem Quist',
          message: 'Just woke up bruh',
          profilePhoto: require("@/assets/profile-17.jpg"),
          
        },
        {
          id: 2,
          name: 'Koome Murume',
          message: 'Sawa',
          profilePhoto: require('@/assets/profile-4.jpg'),
        },
        {
          id: 3,
          name: 'Semchi Balogun',
          message: '3 new messages',
          profilePhoto: require('@/assets/profile-5.jpg'),
        },
        {
          id: 4,
          name: 'Omollo Opondo',
          message: 'Wakey wakey',
          profilePhoto: require('@/assets/profile-6.jpg'),
        }, 
        {
          id: 5,
          name: 'Tremaine Patel',
          message: 'Eat and dance',
          profilePhoto: require('@/assets/profile-7.jpg'),
        },
      ]
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
      if(tabName==='theme'){
        this.$emit('showThemeDialog');
      }
      if(tabName==='messages'){
        this.showMessageCount=false;
        this.showMessageShadow=true;
        setTimeout(() => {
          this.showMessageShadow=false;
        }, 2000);
        
      }
      if(tabName==='notification'){
        this.toggle=true;
        this.showCount=false;
      }else{
        this.toggle=false;
      }
    },
   
  },
 
  computed: {
    filteredMessages() {
      const query = this.searchQuery.toLowerCase();
      console.log(this.filteredMessages);
      return this.messages.filter((message) =>
        message.name.toLowerCase().includes(query)
      );
    },
    
  
 }
  
}
</script>

<style>
   @import '@/assets/styles/styles.css';
</style>
