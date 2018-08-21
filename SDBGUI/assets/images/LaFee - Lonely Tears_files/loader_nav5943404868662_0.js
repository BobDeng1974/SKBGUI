var navMap = {'<void>':['al_index.php',['index.css','index.js']],'<other>':['al_profile.php',['profile.css','page.css','profile.js','page.js']],'public\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'event\\d+($|/)':['al_events.php',['groups.css','page.css','groups.js','page.js']],'club\\d+($|/)':['al_groups.php',['groups.css','page.css','groups.js','page.js']],'publics\\d+($|/)':['al_public.php',['public.css','page.css','public.js','page.js']],'groups(\\d+)?$':['al_groups.php',['groups.css','cmodules/web/groups_list.js','indexer.js']],'groups_create$':['al_groups.php',[]],'events$':['al_groups.php',['groups.css','page.css','groups.js','page.js']],'changemail$':['al_login.php',['reg.css']],'mail($|/)':['al_mail.php',['im.css','imn.js']],'write[-]?\\d*($|/)':['al_mail.php',['im.css','imn.js']],'im($|/)':['al_im.php',['imn.js','im.css','emoji.js','notifier.css']],'gim\\d+($|/)':['al_im.php',['imn.js','im.css','emoji.js','notifier.css']],'audio-?\\d+_\\d+$':['al_audio.php',['audio.css','audio.js']],'audios(-?\\d+)?$':['al_audio.php',['audio.css','audio.js']],'audio($|/)':['al_audio.php',['audio.css','audio.js']],'music$':['al_audio.php',['audio.css','audio.js']],'apps_check($|/)':['al_apps_check.php',['apps.css','apps.js']],'apps($|/)':['al_apps.php',['apps.css','apps.js']],'community_apps($|/)':['al_apps.php',['community_apps.css','community_apps.js']],'editapp($|/)':['al_apps_edit.php',['apps.css','apps.js']],'regstep\\d$':['register.php',['reg.js','reg.css','ui_controls.js','ui_controls.css','selects.js']],'video(-?\\d+_\\d+)?$':['al_video.php',['video.js','video.css','videoview.js','videoview.css','indexer.js']],'videos(-?\\d+)?$':['al_video.php',['video.js','video.css','indexer.js']],'feed$':['al_feed.php',['page.css','page.js','feed.css','feed.js']],'friends$':['al_friends.php',['friends.js','friends.css','privacy.css']],'wall-?\\d+(_\\d+)?$':['al_wall.php',['page.js','page.css','wall.js','wall.css']],'tag\\d+$':['al_photos.php',['photos.js','photoview.js','photos.css','photoview.css']],'albums(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'photos(-?\\d+)?$':['al_photos.php',['photos.js','photos.css']],'album-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css']],'photo-?\\d+_\\d+$':['al_photos.php',['photos.js','photos.css','photoview.js','photoview.css']],'search$':['al_search.php',['search.css','search.js']],'people($|/)':['al_search.php',['search.css','search.js']],'communities$':['al_search.php',['search.css','search.js']],'brands$':['al_search.php',['search.css','search.js']],'invite$':['invite.php',['invite.css','invite.js','ui_controls.css','ui_controls.js']],'join$':['join.php',['join.css','join.js']],'settings$':['al_settings.php',['settings.js','settings.css']],'edit$':['al_profileEdit.php',['profile_edit.js','profile_edit.css']],'blog($|/)':['blog.php',['blog.css','blog.js','page.js']],'press$':['blog.php',['blog.css','blog.js','page.js']],'fave$':['al_fave.php',['fave.js','fave.css','page.css','wall.css','qsorter.js','indexer.js']],'topic$':['al_board.php',['board.css']],'board\\d+$':['al_board.php',['board.css','board.js']],'topic-?\\d+_\\d+$':['al_board.php',['board.css','board.js']],'stats($|/)':['al_stats.php',['stats.css']],'ru/(.*)?$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'pages($|/)':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'page-?\\d+_\\d+$':['al_pages.php',['pages.css','pages.js','wk.css','wk.js']],'restore($|/)':['al_restore.php',['restore.js','restore.css']],'restoreinfo($|/)':['al_restore.php',['restore.js','restore.css']],'gifts\\d*$':['al_gifts.php',['gifts.js','gifts.css']],'docs($|/)':['docs.php',['docs.css','docs.js','indexer.js']],'doc-?\\d+_\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'docs-?\\d+$':['docs.php',['docs.css','docs.js','indexer.js']],'login($|/)':['al_login.php',['login.css']],'tasks($|/)':['tasks.php',['internal/tasks.css','internal/tasks.js']],'abuse($|/)':['abuse.php',[]],'abuse2($|/)':['abuse.php',[]],'restore2($|/)':['restore2.php',['internal/restore2.css','internal/restore2.js','internal/restore2_autoanswers.js','sorter.js']],'datababes($|/)':['datababes.php',[]],'(support($|/)|faq\\d+)':['al_tickets.php',['tickets.css','tickets.js']],'helpdesk($|/)':['al_helpdesk.php',['tickets.css','tickets.js']],'offersdesk($|/)':['offers.php',['offers.css','offers.js']],'payments($|/)':['al_payments.php',['payments.css']],'faq($|/)':['al_faq.php',['faq.css','internal/faq.js']],'tlmd($|\\d+|/)':['al_talmud.php',['talmud.js']],'sms_office($|/)':['sms_office.php',['sms_office.css','sms_office.js']],'dev($|/)':['dev.php',['dev.css','dev.js']],'developers($|/)':['al_developers.php',['developers.css']],'help($|/)':['al_help.php',['help.css','help.js']],'claims($|/)':['al_claims.php',['claims.css','claims.js']],'video_embed($|/)':['al_video_embed.php',['video_embed.css','video_embed.js']],'ads$':['ads.php',['ads.css','ads.js']],'adbonus$':['ads.php',['ads.css','ads.js']],'adsbonus$':['ads.php',['ads.css','ads.js']],'adregister$':['ads.php',['ads.css','ads.js']],'adsedit$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adscreate$':['ads_edit.php',['ads.css','ads.js','ads_edit.css','ads_edit.js']],'adsmoder$':['ads_moder.php',['ads.css','ads.js','ads_moder_common.css','ads_moder.css','ads_moder_common.js','ads_moder.js']],'adsweb$':['ads_web.php',['ads.css','ads.js','ads_web.css','ads_web.js']],'ads/([a-zA-Z0-9\\_]+)$':['ads.php',['ads.css','ads.js','landings/ads.css','landings/landings.css','landing_aes.js']],'exchange$':['ads_posts.php',['ads.css','ads.js','exchange.css','exchange.js']],'exchangemoder$':['ads_posts_moder.php',['ads.css','ads.js','ads_moder_common.css','exchange_moder.css','ads_moder_common.js','exchange_moder.js']],'adsmarket$':['ads_posts.php',['ads.css','ads.js','exchange.css','exchange.js']],'offers$':['ads_offers.php',['ads.css','ads.js','ads_offers.css','ads_offers.js']],'offersmoder$':['ads_offers_moder.php',['ads.css','ads.js','ads_offers_moder.css','ads_offers_moder.js']],'test$':['al_help.php',['help.css','help.js']],'agenttest$':['al_help.php',['help.css','help.js']],'grouptest$':['al_help.php',['help.css','help.js']],'dmca$':['al_tickets.php',['tickets.css','tickets.js']],'terms$':['al_help.php',['help.css','help.js']],'legal$':['al_help.php',['help.css','help.js']],'privacy($|/)':['al_help.php',['help.css','help.js']],'licence$':['al_help.php',['help.css','help.js']],'editdb($|/)':['edit.php',[]],'note\\d+_\\d+$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'notes(\\d+)?$':['al_wall.php',['wall.js','wall.css','wk.js','wk.css','pagination.js']],'bugs($|/)':['bugs.php',['bugs.css','bugs.js']],'wkview.php($)':['wkview.php',['wkview.js','wkview.css','wk.js','wk.css']],'charts($|/)':['al_audio.php',['audio.css','audio.js']],'maps($|/)':['maps.php',[]],'jobs$':['al_jobs.php',['jobs.css','jobs.js','blog.css','blog.js']],'about$':['blog.php',['blog.css','blog.js']],'products$':['blog.php',['blog.css','blog.js']],'ui$':['ui.php',[]],'translation($|/)':['al_translations.php',[]],'mobile$':['al_login.php',[]],'stickers($|/)':['al_im.php',['imn.js','im.css','emoji.js','notifier.css']],'stickers_office($|/)':['stickers.php',['stickers_office.css']],'print$':['al_print.php',['print.css','print.js']],'pattern(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'link(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'autoreg(\\d+)?$':['patterns_info.php',['dyn-patterns_info.css','dyn-patterns_info.js','page.css']],'statlogs($|/)':['statlogs_view.php',['statlogs.css']],'market(-?\\d+)?(_\\d+)?$':['al_market.php',['market.css','market.js']],'market_adm($|/)':['al_market_adm.php',['market.css','market.js']],'stories(-?\\d+)?(_\\d+)?$':['al_stories.php',['stories.css','stories.js']],'story(-?\\d+)_(\\d+)$':['al_stories.php',['stories.css','stories.js']],'mask(-?\\d+)_(\\d+)$':['al_masks.php',[]],'bugtracker($|/)':['al_bugtracker.php',['bugtracker.css','bugtracker.js']],'bugtracker_adm($|/)':['al_bugtracker_adm.php',['bugtracker.css','bugtracker.js']],'landings$':['landings.php',[]],'ach($|/)':['achievements.php',['achievements.css','achievements.js']],'gmta($|/)':['gmt_achievements.php',[]],'memedit($|/)':['members.php',['members.css','dyn-members.js']],'meminfo($|/)':['member_info.php',['meminfo.css']],'groupinfo($|/)':['group_info.php',['groupinfo.css']],'cvkmobile($|/)':['cvkmobile.php',['internal/cvkmobile.css','internal/cvkmobile.js']],'surveys(-[0-9]+)$':['al_surveys.php',['surveys.css']],'survey(-[0-9]+)_([0-9]+)$':['al_surveys.php',['surveys.css','surveys.js']],'imnumberx$':['imnumberx.php',['imnumberx.css']],'push_notifier':['al_pushNotifier.php',[]],'artist($|/)':['al_artist.php',[]],'bookmarks($|/)':['al_bookmarks.php',[]],'cleveradmin':['stream_quiz.php',['internal/stream_quiz.css','cmodules/internal/stream_quiz.js']]}; var stVersions = { 'nav': 5943404868662, 'fonts_cnt.css': 1318650823, 'common.js': 1161, 'common.css': 31787628386, 'cmodules/web/common_web.js': 3, 'retina.css': 2633262011, 'uncommon.js': 1640247993, 'uncommon.css': 14327002882, 'filebutton.css': 1044306797, 'lite.js': 3478624912, 'lite.css': 39968871661, 'rtl.css': 14860870466, 'pagination.js': 1027022568, 'blog.css': 20699945361, 'blog.js': 1358605934, 'html5audio.js': 976782859, 'audioplayer.js': 5900725812, 'audioplayer.css': 17826347132, 'audio_html5.js': 287741914, 'audio.js': 1008296479, 'cmodules/web/audio_admins.js': 5876846224, 'audio.css': 19619261628, 'audio_admins.css': 18307346908, 'gifts.css': 19763304823, 'gifts.js': 338252255, 'cc.js': 1644397126, 'indexer.js': 1700343828, 'graph.js': 3882247419, 'graph.css': 17650867458, 'boxes.css': 16048353390, 'box.js': 590267265, 'rate.css': 1431298744, 'tooltips.js': 2526693302, 'tooltips.css': 19618369456, 'sorter.js': 1976440538, 'qsorter.js': 4013122173, 'usorter.js': 362016183, 'cmodules/web/photos_module.js': 11691946401, 'photo_tagger_mode.js': 2604367346, 'photoview.js': 3748076305, 'photoview.css': 30201895327, 'fullscreen_pv.js': 2393839857, 'fullscreen_pv.css': 15466094350, 'spe.js': 2562549032, 'friends.js': 140439177, 'friends.css': 18380029628, 'friends_search.js': 3438694410, 'friends_search.css': 1694758778, 'board.js': 1407419022, 'board.css': 22275175544, 'photos.css': 23882804268, 'photos.js': 3151850036, 'photos_add.css': 24509738857, 'photos_add.js': 2491851607, 'wkpoll.js': 3269049793, 'wkview.js': 1397842818, 'wkview.css': 23237805994, 'single_pv.css': 1445030012, 'single_pv.js': 2438273057, 'video.js': 1529301213, 'video.css': 29120423212, 'videocat.js': 3590298689, 'videocat.css': 24613792930, 'videoview.js': 13066071286, 'videoview.css': 26959680639, 'video_edit.js': 2135196486, 'video_edit.css': 22005948893, 'video_upload.js': 5994829855, 'video_youtube.js': 458412745, 'video_youtube.css': 13760213944, 'videoplayer.js': 91782027195, 'videoplayer.css': 37108491254, 'translation.js': 568505835, 'translation.css': 16719556726, 'reg.css': 887926110, 'reg.js': 1336565657, 'invite.css': 17642940407, 'invite.js': 4133426028, 'prereg.js': 4187303773, 'index.css': 14519247124, 'index.js': 356147149, 'join.css': 21401734763, 'join.js': 4007003638, 'intro.css': 17219241394, 'post.css': 19641314499, 'module.css': 18981646480, 'owner_photo.js': 1308202247, 'owner_photo.css': 19772666403, 'page.js': 2963204893, 'page.css': 39536630421, 'page_help.css': 21606873116, 'public.css': 23077286479, 'public.js': 2784121325, 'pages.css': 21208459274, 'pages.js': 1162259210, 'groups.css': 23564920094, 'groups.js': 1566146009, 'cmodules/web/groups_create.js': 2554367098, 'groups_create.css': 16769075778, 'cmodules/web/groups_list.js': 5109346988, 'cmodules/web/GroupsEdit.js': 19418385316, 'groups_edit.css': 37291713143, 'groups_edit.js': 2403173456, 'profile.css': 18081727031, 'profile.js': 610604261, 'calendar.css': 19032684595, 'calendar.js': 4203451993, 'wk.css': 20044924258, 'wk.js': 2226505193, 'pay.css': 989146268, 'pay.js': 1463178433, 'tagger.js': 3191664136, 'tagger.css': 18867740582, 'qsearch.js': 4098038985, 'wall.css': 22374433122, 'wall.js': 2318930545, 'walledit.js': 3246554852, 'thumbs_edit.css': 14343960958, 'thumbs_edit.js': 3014691161, 'mail.css': 2042965398, 'mail.js': 2691231200, 'email.css': 2955752408, 'im.css': 198985652258, 'imn.js': 260303053923, 'im.js': 1322065005, 'emoji.js': 3487749369, 'wide_dd.css': 16869569715, 'wide_dd.js': 452755344, 'writebox.css': 17296168690, 'writebox.js': 10425041227, 'sharebox.js': 2415141047, 'fansbox.js': 2740474922, 'postbox.css': 3839233565, 'postbox.js': 760473537, 'feed.js': 306742553, 'feed.css': 19353691181, 'privacy.js': 835833828, 'privacy.css': 14543385066, 'apps.css': 32436144053, 'apps.js': 2592138904, 'apps_edit.js': 2351734575, 'apps_edit.css': 31836497506, 'apps_check.js': 3204387834, 'apps_check.css': 24112892262, 'settings.js': 32955858, 'settings.css': 25161744451, 'profile_edit.js': 3810774798, 'profile_edit.css': 16688903916, 'profile_edit_edu.js': 872687230, 'profile_edit_job.js': 1688095335, 'profile_edit_mil.js': 112384103, 'search.js': 1964893397, 'search.css': 27674689296, 'grid_sorter.js': 3170482150, 'auto_list.js': 1643414770, 'suggester.js': 1049909811, 'datepicker.js': 2137912864, 'datepicker.css': 18695535911, 'oauth_popup.css': 24804124511, 'oauth_page.css': 377358648, 'oauth_touch.css': 850126194, 'notes.css': 2351233181, 'notes.js': 3300062627, 'wiki.css': 21941155303, 'fave.js': 647565245, 'fave.css': 18811305225, 'widget_comments.css': 28537591155, 'widget_auth.css': 25420268442, 'widget_community.css': 25400856049, 'widget_contactus.css': 30217380062, 'widget_post.css': 31192451176, 'widget_allow_messages_from_community.css': 28536721288, 'api/widgets/al_poll.js': 3646378476, 'api/widgets/al_contactus.js': 3360514866, 'api/widgets/al_subscribe.js': 39893216, 'api/widgets/al_like.js': 2029025800, 'api/widgets/al_post.js': 3723713031, 'cmodules/api/widgets/comments.js': 3930590954, 'cmodules/api/widgets/community.js': 1650887228, 'cmodules/api/widgets/allow_messages_from_community.js': 618639651, 'cmodules/api/widgets/app.js': 3131808422, 'cmodules/api/widgets/auth.js': 2163782307, 'api/widgets/al_add_community_app.js': 807582258, 'widget_add_community_app.css': 27709226139, 'api/widgets/community_messages.js': 909574838, 'widget_community_messages.css': 29565319548, 'al_poll.css': 3, 'widget_recommended.css': 25400421405, 'widgets.css': 27921675359, 'common_light.js': 2102079137, 'developers.css': 2998332598, 'notifier.js': 75491862595, 'notifier.css': 26361809051, 'cmodules/sw/sw.js': 4889939668, 'earthday.js': 2276669993, 'earthday.css': 287663071, 'restore.js': 715340394, 'restore.css': 17323595612, 'docs.js': 995211544, 'docs.css': 22567598284, 'tags_dd.js': 3735969205, 'tags_dd.css': 16172178093, 'helpdesk.js': 2913283560, 'helpdesk.css': 19137797754, 'tickets.js': 3760264995, 'tickets.css': 21895837914, 'faq.css': 22040026713, 'talmud.js': 1641838680, 'agents.js': 2426697933, 'agents.css': 16355067510, 'achievements.js': 3514956550, 'achievements.css': 17442973560, 'sf.css': 18691864843, 'members.css': 16094830784, 'meminfo.css': 24801365122, 'groupinfo.css': 81219187429, 'bugs.js': 3874995669, 'bugs.css': 14141858108, 'bugtracker.js': 1079488016, 'bugtracker.css': 22873283421, 'login.css': 17348168535, 'cmodules/web/login.js': 3491120396, 'upload.js': 3788345205, 'upload_photo_transform.js': 1497838791, 'graffiti.js': 1826105362, 'graffiti.css': 404471482, 'graffiti_new.js': 67279821, 'graffiti_new.css': 18750405858, 'abuse.css': 13870258952, 'verify.css': 13604512872, 'away.css': 18986395945, 'stats.css': 16349584347, 'payments.css': 26561874710, 'payments.js': 711693407, 'offers.css': 978996883, 'offers.js': 2030679272, 'call.js': 4217435992, 'call.css': 3256039661, 'aes_light.css': 24523456137, 'aes_light.js': 1484013701, 'ads.css': 22003179762, 'ads_bonus.css': 1294533291, 'ads.js': 624274273, 'ads_payments.js': 2205910694, 'ads_edit.css': 13633509459, 'ads_edit.js': 2571050786, 'ads_edit_geo.js': 519167575, 'ads_moder_common.css': 14667914640, 'ads_moder.css': 14246113210, 'ads_moder_common.js': 3875868763, 'ads_moder.js': 2824949856, 'ads_tagger.js': 2289308011, 'ads_web.css': 1585148602, 'ads_web.js': 4274163593, 'mrtarg.js': 1146267795, 'mrtarg.css': 3142794554, 'cmodules/web/ads_edit_easy.js': 2243042172, 'health.css': 2251304991, 'health.js': 2993570139, 'pinbar.js': 284788792, 'sms_office.css': 1728588285, 'sms_office.js': 333673010, 'help.css': 14598306777, 'help.js': 915032948, 'claims.css': 15466445480, 'claims.js': 4191854833, 'video_embed.js': 492405, 'video_embed.css': 17701387446, 'site_stats.css': 3894412059, 'site_stats.js': 3102281884, 'blank.css': 14159787341, 'wk_editor.js': 9472853587, 'wk_editor.css': 20848463623, 'btagger.js': 333150, 'btagger.css': 3891092611, 'filters.js': 2533221357, 'filters_pe.js': 3589638532, 'pe.js': 318083439, 'pe.css': 14060441084, 'dev.js': 3510788917, 'dev.css': 32875264257, 'share.css': 26296178894, 'stickers_office.css': 16249294343, 'mapbox.js': 262357480, 'mapbox.css': 4285195017, 'jobs.js': 1932948232, 'jobs.css': 15758387005, 'print.js': 1255624803, 'print.css': 16096188371, 'qrcode.js': 773151497, 'contests.css': 2752582154, 'ui.css': 15086873089, 'ui.js': 1385249136, 'ui_common.js': 1617946438, 'ui_common.css': 16952857964, 'ui_media_selector.js': 1700826335, 'ui_media_selector.css': 19425247580, 'ui_manual.css': 15338444966, 'admin.css': 18811476849, 'duty_timetable.js': 2022938460, 'duty_timetable.css': 17259095419, 'paysupp_admin.js': 127920242, 'paysupp_admin.css': 16125151156, 'exchange.css': 16245790777, 'exchange.js': 3247888614, 'exchange_moder.css': 15812362049, 'exchange_moder.js': 44454466, 'ads_offers.css': 16721715808, 'ads_offers.js': 4186630263, 'ads_offers_moder.css': 1451957431, 'ads_offers_moder.js': 3862633445, 'landings/landings.css': 19048401363, 'landings/vk10_years.css': 15402307483, 'market.css': 22110593922, 'market.js': 2110360326, 'market_adm.css': 16569352998, 'market_adm.js': 2677502581, 'stories_admin.css': 17465618559, 'stories_admin.js': 1129028316, 'vk2016.css': 2021229875, 'landings/common.css': 19416314298, 'landings/community_message.css': 14865880974, 'landings/wdsd.css': 15244881599, 'landings/smartfeed.css': 926801211, 'landings/dota.css': 14038593846, 'dota_landing.js': 2187041646, 'landings/promo_post.css': 18138174864, 'landings/fellowship.css': 23851191795, 'landings/psb.css': 19828209665, 'landings/psb_context.css': 19990271, 'landings/psb_mobile.css': 22975050150, 'landings/moneysend.css': 15929158484, 'landings/moneysend.js': 920570337, 'landings/desktop_messenger.css': 15936734071, 'landings/vklive.css': 16702869378, 'landings/vk2017.css': 15478327504, 'landings/vkmusic.css': 2781063990, 'landings/vkmusic.js': 1745567881, 'landings/vkmasks.css': 15512937319, 'landings/vkmasks.js': 1193444147, 'landings/vkvalentine.css': 16089676156, 'landings/vkvalentine.js': 3463861529, 'landings/calls.js': 1624757932, 'landings/ads.css': 17647036612, 'landing_aes.js': 17167906988, 'landings/donors_day.css': 17729107159, 'landing_donors_day.js': 1027075361, 'landings/testing.css': 15715719010, 'vkme.css': 22301265474, 'cmodules/web/vkme-desktop.js': 5837370790, 'ui_controls.js': 2247765440, 'highcharts.js': 1982709850, 'ui_controls.css': 15358759598, 'selects.js': 2835310113, 'mentions.js': 3097650360, 'apps_flash.js': 574154589, 'maps.js': 2858461320, 'places.js': 592992591, 'places.css': 18287663859, 'map2.js': 3799102730, 'map.css': 4020192821, 'paginated_table.js': 1750088857, 'paginated_table.css': 16102827147, 'api/share.js': 2262994046, 'api/openapi.js': 874526794, 'api/xdm.js': 1449919642, 'hls.min.js': 222578124, 'candy.min.js': 1892723665, 'q_frame.php': 7, '/swf/api_wrapper.swf': 7, '/swf/api_external.swf': 8, '/swf/api_wrapper2_0.swf': 8, '/swf/video_lite.swf': 2, '/swf/audio_lite.swf': 13, '/swf/uploader_lite.swf': 13, '/swf/photo_uploader_lite.swf': 17, '/swf/CaptureImg.swf': 12, '/swf/video.swf': 157, '/swf/vkvideochat.swf': 50, '/swf/vchatdevices.swf': 1, 'top_logo.css': 14785351935, 'favicon': 6, 'speech.js': 29879154215, 'voice_message_player.js': 18549969583, 'cmodules/web/speech_worker_mp3.js': 4119569941, 'cmodules/web/speech_worker_opus.js': 2818771805, 'stories.js': 56378863322, 'stories.css': 18195456074, 'cmodules/web/stories_manage.js': 27871803208, 'stories_manage.css': 70577583685, 'article.css': 31584662896, 'article_editor.css': 33205735824, 'cmodules/web/article.js': 37530935843, 'cmodules/web/article_layer.js': 19410695666, 'article_view.js': 14362595756, 'bookmarks.css': 13960423281, 'cmodules/web/bookmarks.js': 1303575103, 'shortener.js': 16413120, 'cmodules/web/pretty_cards.js': 124004037, 'cmodules/web/landing_ads_case.js': 3936066274, 'cmodules/web/trending_results.js': 1020488162, 'cmodules/web/page_layout.js': 1172409392, 'landings/ads_cases.css': 25763426274, 'surveys.css': 21003391281, 'surveys.js': 3963089861, 'landings/author_guide.css': 23243837109, 'language.js': 3551638980, 'language.css': 16553310989, 'cmodules/web/stickers.js': 8721026546, 'cmodules/web/stickers_office.js': 8979054167, 'cmodules/web/bodymovin.js': 1511042105, 'lead_forms_app.js': 10774763048, 'lead_forms_app.css': 16304718093, 'time_spent.js': 732637085, 'cmodules/web/app_info.js': 2375115030, 'cmodules/web/grip.js': 4164501492, 'cmodules/web/group_invite_chat.js': 43933190606, 'group_invite_chat.css': 71628051690, 'cmodules/web/reports.js': 19854794487, 'cmodules/web/raven_logger.js': 7336038093, 'cmodules/web/add_to_community_app.js': 3789381770, 'community_bot.js': 1928249077, 'community_bot.css': 3742743729, 'lang': 6887}; var stTypes = {fromLib:{'md5.js':1,'clipboard.js':1,'ui_controls.js':1,'highcharts.js':1,'selects.js':1,'maps.js':1,'hls.min.js':1,'candy.min.js':1},fromRoot:{'api/share.js':1,'api/openapi.js':1,'api/xdm.js':1,'apps_flash.js':1,'mentions.js':1,'map2.js':1,'ui_controls.css':1,'map.css':1,'paginated_table.js':1,'paginated_table.css':1,'mobile/common.js':1,'mobile/oauth.js':1,'mobile/adaptive_table.css':1,'mobile/base_head.css':1,'mobile/base_screen.css':1,'mobile/common.css':1,'mobile/common_2x.css':1,'mobile/full_browser.css':1,'mobile/gallery.css':1,'mobile/ios_device.css':1,'mobile/medium_head.css':1,'mobile/medium_screen.css':1,'mobile/oauth_android.css':1,'mobile/oauth_ios.css':1,'mobile/oauth_winmobile.css':1,'mobile/small_screen.css':1,'mobile/wiki.css':1},fromCompiled:{ 'imn.js': 1, 'audioplayer.js': 1, 'notifier.js': 1, 'writebox.js': 1, 'landing_aes.js': 1, 'speech.js': 1, 'voice_message_player.js': 1, 'videoplayer.js': 1, 'videoview.js': 1, 'video_upload.js': 1, 'landing_donors_day.js': 1, 'lead_forms_app.js': 1, 'stories.js': 1, 'grid_sorter2.js': 1, 'mr_truth.js': 1, 'article_view.js': 1, 'rich_dropdown.js': 1, 'lazyload.js': 1, 'fifa2018.js': 1, 'wk_editor.js': 1, 'groups_edit_stories.js': 1, 'apps.js': 1, 'likes.js': 1, 'audio_admins.js': 1}}; var _rnd = 6546;